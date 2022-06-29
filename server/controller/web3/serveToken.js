const Web3 = require('web3');
const abi = require('./abi');
const dotenv = require("dotenv");
dotenv.config();

module.exports ={
    post: async(req,res) => {
        
        try {

            const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

            const myContract = new web3.eth.Contract(abi, (process.env.CONTRACT_ADDRESS).toString());

            // const address = await User.findOne({
            //     where: { userId: req.session.userId },
            //     attributes:  ['address']
            //   });
        
            //트랜잭션을 통해 보낼 ABI코드 인코딩
            const data = myContract.methods.transfer('0xecf79a71ac1becf5f1a1002008931e5079cd00d5', 100000).encodeABI();

            async function getTOKENBalanceOf(address){ //해당 주소에 myContract로 생성된 토큰 잔액 보기 
                return await myContract.methods.balanceOf(address).call();                        
            }   

            const rawTransaction = {"to": (process.env.CONTRACT_ADDRESS).toString(), "gas": 100000, "data": data }; 

            console.log("test");
            // web3.eth.accounts.signTransaction(rawTransaction, process.env.ETH_PRIVATEKEY) // 비밀키로 서명 후 트랜잭션 전송 
            //     .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))
            //     //.then(function(receipt){ console.log("Transaction receipt: ", receipt); getETHBalanceOf();  })
            //     .then(req => { 
            //             /* The trx was done. Write your acctions here. For example getBalance */
            //             getTOKENBalanceOf('0xecf79a71ac1becf5f1a1002008931e5079cd00d5').then ( balance => { console.log('0xecf79a71ac1becf5f1a1002008931e5079cd00d5' + " Token Balance: " + balance); });
            //             return true;  
            //     }) 
            const blockNumber = await web3.eth.getBlockNumber();


            const blockData = await web3.eth.getBlock(blockNumber)
            console.log(blockData)
            const transactionData = await web3.eth.getTransaction(blockData.transactions)
            console.log(transactionData);

            // Transaction.create({
            //     blockNumber: ,
            //     TransactionHash: ,
            //     from: ,
            //     to: ,
            //     contractAddress: ,
            //   });
            res.status(200).json({
                message: "Serving Successed",
                // data: {
                //     username: 'kimcoding',  // 사용자 이름
                //     address: '0x32482...',  // 받는 계정의 주소
                //     // txHash: '0x234C1...',  // 트랜잭션 해시
                //     tokenBalance: balance, // 유저의 토큰 잔액
                // }
            })
        } catch (error) {
            
        }


        
    }
}