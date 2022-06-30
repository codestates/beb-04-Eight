const Web3 = require('web3');
const abi = require('./abi');
const { User } = require("../../models");
const contractAddr = require("./contractAddr")
const getTokenBalance = require("../../Functions/getTokenBalance");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    post : async(req, res) => {
        
        try {

            const userData = await User.findOne({
                where: { userId: req.body.userId },
                attributes:  ['address', 'privateKey']
            });

            const userAddress = userData.dataValues.address.toString();

            const userPrivateKey = userData.dataValues.privateKey.toString();

            const targetAddress = req.body.targetAddress;
            
            const web3 = new Web3('https://ropsten.infura.io/v3/ef5065bb61304474b34bae83c3406c05');

            web3.eth.accounts.privateKeyToAccount(userPrivateKey);

            const myContract = new web3.eth.Contract(abi, (contractAddr).toString());
            
            const beforeBalance = parseInt(await getTokenBalance(userAddress)); // 사용자의 토큰 잔액
            
            const serveTokenAmount = parseInt(req.body.serveAmount);  // 전송할 토큰 양

            const data = myContract.methods.transfer(targetAddress, serveTokenAmount).encodeABI();

            if(beforeBalance > serveTokenAmount){  
                const rawTransaction = {"to": (contractAddr).toString(), "gas": 1000000, "data": data }; 

                console.log(rawTransaction);
                web3.eth.accounts.signTransaction(rawTransaction, userPrivateKey) // 비밀키로 서명 후 트랜잭션 전송 
                .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))
                .then(req => { 
                    getTokenBalance(userAddress)
                    .then ( async () => { 
                         const afterBalance = await getTokenBalance(userAddress);;
                         const targetBalance = await getTokenBalance(targetAddress);
                         res.status(200).json({
                            message: "Serving Successed",
                            data: {
                                userAddr: userAddress,  // 사용자 지갑 주소
                                userBalance: afterBalance,  // 사용자 토큰 잔액
                                targetAddr: targetAddress, // 타겟 지갑 주소
                                targetBalance: targetBalance, // 타겟 토큰 잔액
                            }
                        })
                        console.log('Serving Successed');
                    });
                }) 
                
            } else {
                res.status(502).send('Error: tokenExchange Transaction Failed')
            }
        } catch (error) {
            console.log(error)
        }
    }
}