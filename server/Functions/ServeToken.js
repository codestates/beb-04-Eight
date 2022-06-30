const Web3 = require('web3');
const abi = require('../controller/web3/abi');
const { User } = require("../models");
const dotenv = require("dotenv");
const getTOKENBalanceOf = require("./getTokenBalance");
const contractAddr = require("../controller/web3/contractAddr")
dotenv.config();

async function serveToken(address) {
    try {
        console.log('function start');
        const web3 = new Web3('https://ropsten.infura.io/v3/ef5065bb61304474b34bae83c3406c05'); //가나슈로부터 web3 객체 생성

        const myContract = new web3.eth.Contract(abi, (contractAddr).toString());

        const userAddress = address;

        console.log('userAddress', userAddress);

        const serverData = await User.findOne({
            where: { userId: 'server' },
            attributes:  ['address']
        });

        const serverAddress = serverData.dataValues.address.toString();

        console.log('serverAddress', serverAddress);

        const serveTokenAmount = 100000;

        //트랜잭션을 통해 보낼 ABI코드 인코딩
        const data = myContract.methods.transfer(userAddress, serveTokenAmount).encodeABI();

        const serverBalance = await getTOKENBalanceOf(serverAddress); // 서버 계정의 토큰 잔액

        const tokenSupply = 100000; // 유저에게 전송할 토큰의 양

        if(serverBalance > tokenSupply){
            const rawTransaction = {"to": (contractAddr).toString(), "gas": tokenSupply, "data": data }; 

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