const Web3 = require('web3');
const abi = require('./abi');
const { User } = require("../../models");

module.exports = {
    post : async(req, res) => {
        
        try {

            const userData = await User.findOne({
                where: { userId: req.session.userId },
                attributes:  ['address']
            });

            const userAddress = userData.dataValues.address.toString();

            // userAddress엔 컨트랙트 배포한 주소가 들어가야함
            // 가나슈 지갑 주소로 넣어야 테스트 가능
            // const userAddress = '0x5D2F2d0ba7F19786d629FFBc34c7Bd6F901FD922'

            const targetAddress = req.body.targetAddress;

            const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

            const myContract = new web3.eth.Contract(abi, process.env.CONTRACT_ADDRESS);
            
            //컨트랙트의 해당 토큰 잔액 조회
            async function getBalance(toAddress){
                return await myContract.methods.balanceOf(toAddress).call();
            }
            //컨트랙트의 토큰 transfer 
            async function setTransfer(toAddress,amount){ 
                const result = await myContract.methods.transfer(toAddress, parseInt(amount)).send(
                    {from: userAddress, gasPrice: 100, gas: 100000},
                    function(err, txhash){
                        try{
                            console.log(txhash);
                        }catch(err){
                            console.log( "Error "+err.toString());
                        }
                    }
                )
                return result;
            }
            const beforeBalance = await getBalance(userAddress); // 사용자의 토큰 잔액
            
            const serveAmount = req.body.serveAmount; // 전송할 토큰 양

            if(beforeBalance >= serveAmount){ 
                setTransfer(targetAddress,serveAmount)

                const userBalance = await getBalance(userAddress);
                const targetBalance = await getBalance(targetAddress);

                res.status(200).json({
                    message: "Serving Successed",
                    data: {
                        userAddr: userAddress,  // 사용자 지갑 주소
                        userBalance: userBalance,  // 사용자 토큰 잔액
                        targetAddr: targetAddress, // 타겟 지갑 주소
                        targetBalance: targetBalance, // 타겟 토큰 잔액
                    }
                })
            } else {
                res.status(502).send('Error: tokenExchange Transaction Failed')
            }
        } catch (error) {
            console.log(error)
        }
    }
}