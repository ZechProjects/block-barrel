// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TipBartender {
    address public owner;
    uint256 public totalTips;

    event TipReceived(address indexed from, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    function tip() external payable {
        require(msg.value > 0, "Tip amount must be greater than zero");
        totalTips += msg.value;
        emit TipReceived(msg.sender, msg.value);
    }

    function withdrawTips() external {
        require(msg.sender == owner, "Only the owner can withdraw tips");
        payable(owner).transfer(address(this).balance);
    }
}
