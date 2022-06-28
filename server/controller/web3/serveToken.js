const Web3 = require('web3');
const abi = require('./abi');
const { User } = require("../../models");
const dotenv = require("dotenv");
dotenv.config();

module.exports ={
    post: async(req,res) => {
        
        try {

            const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

            const myContract = new web3.eth.Contract(abi, (process.env.CONTRACT_ADDRESS).toString());

            const userData = await User.findOne({
                where: { userId: req.session.userId },
                attributes:  ['address']
            });

            const serverData = await User.findOne({
                where: { userId: 'server' },
                attributes:  ['address']
            });

            const serverAddress = serverData.dataValues.address.toString();

            const userId = req.session.userId;
            const address = userData.dataValues.address.toString();

            const serveTokenAmount = 100000;
        
            //트랜잭션을 통해 보낼 ABI코드 인코딩
            const data = myContract.methods.transfer(address, serveTokenAmount).encodeABI();

            async function getTOKENBalanceOf(address){ //해당 주소에 myContract로 생성된 토큰 잔액 보기 
                return await myContract.methods.balanceOf(address).call();                        
            }   

            const serverBalance = await getTOKENBalanceOf(serverAddress); // 서버 계정의 토큰 잔액

            const tokenSupply = 100000; // 유저에게 전송할 토큰의 양

            if(serverBalance > tokenSupply){
                const rawTransaction = {"to": (process.env.CONTRACT_ADDRESS).toString(), "gas": tokenSupply, "data": data }; 

            web3.eth.accounts.signTransaction(rawTransaction, process.env.ETH_PRIVATEKEY) // 비밀키로 서명 후 트랜잭션 전송 
                .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))
                //.then(function(receipt){ console.log("Transaction receipt: ", receipt); getETHBalanceOf();  })
                .then(req => { 
                        /* The trx was done. Write your acctions here. For example getBalance */
                        getTOKENBalanceOf(address)
                        .then ( balance => {
                             const userBalance = balance;
                             res.status(200).json({
                                message: "Serving Successed",
                                data: {
                                    userId: userId,  // 사용자 아이디
                                    address: address,  // 받는 계정의 주소
                                    tokenBalance: userBalance, // 유저의 토큰 잔액
                                }
                            })
                        });
                }) 
            } else {
                res.status(502).send('Error: serveToken Transaction Faield')
            }
            
        } catch (error) {
            console.log(error);
        }
    }
}