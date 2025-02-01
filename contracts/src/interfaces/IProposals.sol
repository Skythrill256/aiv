// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface IProposals {
    struct Proposal {
        string description;
        uint256 voteCount;
    }

    event Voted(address indexed _from, uint256 indexed _propositionIndex);
}
