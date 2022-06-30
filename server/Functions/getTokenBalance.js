const Web3 = require('web3');
const abi = require('../controller/web3/abi');

async function getTOKENBalanceOf(address){ 

    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

    const myContract = new web3.eth.Contract(abi, (process.env.CONTRACT_ADDRESS).toString());

    return await myContract.methods.balanceOf(address).call();                        
}  

module.exports = getTOKENBalanceOf;