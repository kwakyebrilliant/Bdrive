// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

contract Bdrive {
      struct File {
        string name;
        address owner;
        address recipient;
        bool isShared;
        uint256 timeUploaded;
        uint256 timeShared;
        string image;
    }

    mapping (address => File[]) private files;

    function uploadFile(string memory _name, string memory _image) public {
        require(bytes(_name).length > 0, "File name should not be empty");
        require(bytes(_image).length > 0, "Image string should not be empty");
        files[msg.sender].push(File({
            name: _name,
            owner: msg.sender,
            recipient: address(0),
            isShared: false,
            timeUploaded: block.timestamp,
            timeShared: 0,
            image: _image
        }));
    }

    function listFiles() public view returns (string[] memory, uint256[] memory, string[] memory) {
        uint256 length = files[msg.sender].length;
        string[] memory names = new string[](length);
        uint256[] memory timestamps = new uint256[](length);
        string[] memory images = new string[](length);
        for (uint256 i = 0; i < length; i++) {
            names[i] = files[msg.sender][i].name;
            timestamps[i] = files[msg.sender][i].timeUploaded;
            images[i] = files[msg.sender][i].image;
        }
        return (names, timestamps, images);
    }

    function shareFile(uint256 _index, address _recipient) public {
        require(_index < files[msg.sender].length, "Invalid index");
        require(files[msg.sender][_index].owner == msg.sender, "You do not own this file");
        require(_recipient != msg.sender, "Recipient address should not be your own");
        files[msg.sender][_index].recipient = _recipient;
        files[msg.sender][_index].isShared = true;
        files[msg.sender][_index].timeShared = block.timestamp;
    }

    function listSharedFiles() public view returns (string[] memory, uint256[] memory, string[] memory) {
        uint256 length = files[msg.sender].length;
        uint256 sharedCount = 0;
        for (uint256 i = 0; i < length; i++) {
            if (files[msg.sender][i].isShared) {
                sharedCount++;
            }
        }
        string[] memory sharedFiles = new string[](sharedCount);
        uint256[] memory timestamps = new uint256[](sharedCount);
        string[] memory images = new string[](sharedCount);
        sharedCount = 0;
        for (uint256 i = 0; i < length; i++) {
            if (files[msg.sender][i].isShared) {
                sharedFiles[sharedCount] = files[msg.sender][i].name;
                timestamps[sharedCount] = files[msg.sender][i].timeShared;
                images[sharedCount] = files[msg.sender][i].image;
                sharedCount++;
            }
        }
        return (sharedFiles, timestamps, images);
    }
}