// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface IID {
    function verifyIDProof(
        uint256 nullifierSeed,
        uint256 nullifier,
        uint256 timestamp,
        uint256 signalData,
        uint256[4] memory revealArray,
        uint256[8] memory groth16Proof
    ) external view returns (bool);
}
