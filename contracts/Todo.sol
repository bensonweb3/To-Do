// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Todo {
    struct Task {
        string text;
        bool completed;
    }

    mapping(address => Task[]) private userTasks;

    function addTask(string memory _text) external {
        userTasks[msg.sender].push(Task(_text, false));
    }

    function toggleTask(uint _index) external {
        require(_index < userTasks[msg.sender].length, "Invalid index");
        userTasks[msg.sender][_index].completed = !userTasks[msg.sender][_index].completed;
    }

    function getTasks() external view returns (Task[] memory) {
        return userTasks[msg.sender];
    }
}
