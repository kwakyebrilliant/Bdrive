// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Bdrive {
    struct File {
        string name;
        address owner;
        address recipient;
        bool isShared;
        uint256 timeUploaded;
        uint256 timeShared;
    }


}