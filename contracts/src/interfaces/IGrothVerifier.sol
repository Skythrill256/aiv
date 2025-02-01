// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;

interface IGrothVerifier {
    function verifyProof(
        uint[2] calldata _pA,
        uint[2][2] calldata _pB,
        uint[2] calldata _pC,
        uint[9] calldata publicInputs
    ) external view returns (bool);
}
