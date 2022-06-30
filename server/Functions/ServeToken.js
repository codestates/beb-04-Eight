const Web3 = require('web3');
const abi = require('../controller/web3/abi');
const { User } = require("../models");
const dotenv = require("dotenv");
const getTOKENBalanceOf = require("./getTokenBalance");
dotenv.config();

async function serveToken(address) {
    try {
        console.log('function start');
        const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

        const myContract = new web3.eth.Contract(abi, (process.env.CONTRACT_ADDRESS).toString());

        const userAddress = address;

        console.log('userAddress', userAddress);

        const serverData = await User.findOne({
            where: { userId: 'server' },
            attributes:  ['address']
        });

        const serverAddress = serverData.dataValues.address.toString();

        const serveTokenAmount = 100000;

        //트랜잭션을 통해 보낼 ABI코드 인코딩
        const data = myContract.methods.transfer(userAddress, serveTokenAmount).encodeABI();

        const serverBalance = await getTOKENBalanceOf(serverAddress); // 서버 계정의 토큰 잔액

        const tokenSupply = 100000; // 유저에게 전송할 토큰의 양

        if(serverBalance > tokenSupply){
            const rawTransaction = {"to": (process.env.CONTRACT_ADDRESS).toString(), "gas": tokenSupply, "data": data }; 

            web3.eth.accounts.signTransaction(rawTransaction, process.env.ETH_PRIVATEKEY) // 비밀키로 서명 후 트랜잭션 전송 
            .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))
            .then(async()=> { 
                const userBalance = await getTOKENBalanceOf(userAddress);
                console.log('serveToken success');
                console.log('user balance', userBalance);
                return userBalance;
            }) 
        } else {
            return 'Error: serveToken Transaction Faield';
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = serveToken;