pragma solidity >0.5.1 <0.8.0;

contract SpecialNumber {
  uint public mainNumber;

  constructor() public {
    mainNumber = 0;
  }

  function incrementMainNumber() public {
    mainNumber++;
  }
}
