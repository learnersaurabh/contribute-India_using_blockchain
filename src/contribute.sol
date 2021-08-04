pragma solidity >=0.7.0 <0.9.0;

contract Contribute {
    
    uint256 targetAmount;
    bool hasFinished;
    address payable beneficiary;
    constructor(address payable _beneficiary, uint256 _targetAmount) payable {
        targetAmount = _targetAmount;
        hasFinished = false;
        beneficiary = _beneficiary;
    }
    
    function pay() public payable {
        
        if(address(this).balance >= targetAmount){
            
            hasFinished = true;
            beneficiary.transfer(address(this).balance);
            selfdestruct(beneficiary);
            
        }
        
    }
    
    function getContractBalance() public view returns(uint256){
        return address(this).balance;
    }
    
    function getTargetAmount() public view returns(uint256){
        return targetAmount;
    }
    
    function getHasFinished() public view returns(bool){
        return hasFinished;
    }
    
    function paymentDone() internal {
    }
}