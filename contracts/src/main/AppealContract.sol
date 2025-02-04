// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IVote} from "../interfaces/IVote.sol";
import {Storage} from "../storage/storage.sol";
import {IHook} from "../interfaces/IHook.sol";
import {SafeCast} from "@openzeppelin/contracts/utils/math/SafeCast.sol";

contract DefaultVote is IVote, Storage {
    using SafeCast for int128;

    constructor(address _hook) {
        _setHook(_hook);
    }

    /// @notice Creates a new appeal.
    /// @dev Reverts if the provided startTime is in the past.
    function createAppeal(
        createAppealParams calldata params
    ) external override returns (uint256 appealId) {
        if (params.startTime < block.timestamp) {
            revert startTimeInPast();
        }
        if (address(hook) != address(0)) {
            // Call the hook (if registered) before appeal creation.
            // If you prefer renaming these hook calls, update your hook interface.
            IHook(hook).beforeProposalCreation(msg.sender, params.hookData);
        }

        IVote.Appeal memory appeal = IVote.Appeal({
            appealer: msg.sender,
            uri: params.uri,
            startTime: params.startTime,
            endTime: params.startTime + params.votingPeriod,
            executed: false,
            forScore: 0,
            againstScore: 0,
            executionData: params.executionData,
            target: params.target
        });

        appealId = appealCount;
        appeals[appealId] = appeal;
        appealCount++;

        if (address(hook) != address(0)) {
            IHook(hook).afterProposalCreation(msg.sender, appealId, "");
        }

        emit AppealCreated(
            appealId,
            msg.sender,
            params.uri,
            params.startTime,
            params.startTime + params.votingPeriod,
            params.executionData,
            params.target
        );
    }

    /// @notice Casts a vote on an appeal.
    /// @dev The vote weight can be positive (for) or negative (against).
    function castVote(casteVoteParams calldata params) external override {
        int256 weightDelta = params.weight;
        if (address(hook) != address(0)) {
            weightDelta = IHook(hook).beforeVoteCast(
                msg.sender,
                params.appealId,
                params.weight,
                params.hookData
            );
        }

        IVote.Appeal storage appeal = appeals[params.appealId];
        if (appeal.startTime > block.timestamp) {
            revert VotingNotStarted();
        }
        if (appeal.endTime < block.timestamp) {
            revert VotingEnded();
        }

        // Update the appropriate score based on the weight direction.
        if (weightDelta > 0) {
            appeal.forScore += int128(weightDelta);
        } else {
            appeal.againstScore += int128(weightDelta);
        }

        if (address(hook) != address(0)) {
            IHook(hook).afterVoteCast(
                msg.sender,
                params.appealId,
                weightDelta,
                ""
            );
        }

        emit voteCast(params.appealId, msg.sender, weightDelta);
    }

    /// @notice Executes an appeal if its voting period is over and the execution window is open.
    function executeAppeal(uint256 appealId) external override {
        if (address(hook) != address(0)) {
            IHook(hook).beforeProposalExecution(msg.sender, appealId);
        }
        IVote.Appeal storage appeal = appeals[appealId];
        uint256 _executionDelay = executionDelay();
        if (appeal.endTime + _executionDelay < block.timestamp) {
            revert ExecutionWindowNotOpen();
        }
        uint256 _executionWindow = executionWindow();
        if (
            appeal.endTime + _executionDelay + _executionWindow <
            block.timestamp
        ) {
            revert ExecutionWindowClosed();
        }
        if (appeal.executed) {
            revert AppealALreadyExecuted();
        }

        appeal.executed = true;

        if (address(hook) != address(0)) {
            IHook(hook).afterProposalExecution(msg.sender, appealId, true);
        }

        emit AppealExecuted(appealId);
    }

    /// @notice Returns the allowed voting period range.
    function votingPeriodRange()
        external
        pure
        override
        returns (uint256 min, uint256 max)
    {
        return (1 days, 30 days);
    }

    /// @notice Returns the delay after the voting period before execution is allowed.
    function executionDelay() public pure override returns (uint256) {
        return 1 days;
    }

    /// @notice Returns the duration of the execution window.
    function executionWindow() public pure override returns (uint256) {
        return 1 days;
    }
}
