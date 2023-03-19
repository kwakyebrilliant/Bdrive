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

    // Allows a user to upload a file to the storage platform by entering the file name.
    function uploadFile(string memory _name) public {
        require(bytes(_name).length > 0, "File name should not be empty");
        files[msg.sender].push(File({
            name: _name,
            owner: msg.sender,
            recipient: address(0),
            isShared: false,
            timeUploaded: block.timestamp,
            timeShared: 0
        }));
    }


    // Returns an array of all files uploaded by the user
    function listFiles() public view returns (string[] memory, uint256[] memory) {
        uint256 length = files[msg.sender].length;
        string[] memory names = new string[](length);
        uint256[] memory timestamps = new uint256[](length);
        for (uint256 i = 0; i < length; i++) {
            names[i] = files[msg.sender][i].name;
            timestamps[i] = files[msg.sender][i].timeUploaded;
        }
        return (names, timestamps);
    }

    function shareFile(uint256 _index, address _recipient) public {
        require(_index < files[msg.sender].length, "Invalid index");
        require(files[msg.sender][_index].owner == msg.sender, "You do not own this file");
        require(_recipient != msg.sender, "Recipient address should not be your own");
        files[msg.sender][_index].recipient = _recipient;
        files[msg.sender][_index].isShared = true;
        files[msg.sender][_index].timeShared = block.timestamp;
    }


}