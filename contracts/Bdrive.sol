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


    mapping (address => File[]) private files;

    function uploadFile(string memory _name) public {
        require(bytes(_name).length > 0, "File name should not be empty");
       
    }


}