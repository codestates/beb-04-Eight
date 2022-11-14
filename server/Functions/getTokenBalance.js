const Web3 = require('web3');
const abi = require('../controller/web3/abi');
const contractAddr = require("../controller/web3/contractAddr");

async function getTOKENBalanceOf(address){ 

    const web3 = new Web3('https://goerli.infura.io/v3/ef5065bb61304474b34bae83c3406c05'); //가나슈로부터 web3 객체 생성

    const myContract = new web3.eth.Contract(abi, (contractAddr).toString());

    return await myContract.methods.balanceOf(address).call();                        
}  

module.exports = getTOKENBalanceOf;