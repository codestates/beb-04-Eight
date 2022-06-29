const Web3 = require('web3');
const { User } = require("../../models");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    post: async (req, res) => {
      try {
        // 메타마스크 지갑 연동으로 변경할 경우 아래의 코드 사용
        // const web3 = new Web3(window.ethereum); 

        const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545')); //가나슈로부터 web3 객체 생성

        const accounts = await web3.eth.getAccounts(); // 가나슈 계정 받아오기

        const balance = await web3.eth.getBalance(accounts[0]); // 가나슈 계정 잔액 

        const oneEth = 1000000000000000000;

        const gasLimit = 2000000;

        //userId가 server인 데이터의 address를 가져온다. 
        const address = await User.findOne({
          where: { userId: req.session.userId },
          attributes:  ['address']
        });

        if(balance > (oneEth + gasLimit)){ // 가나슈 계정 잔액이 (1ETH + gas) 이상이라면
          web3.eth.accounts.privateKeyToAccount(process.env.ETH_PRIVATEKEY); //계정 객체에 개인키를 등록한다. 

          //트랜잭션에 서명
          const signResult = await web3.eth.accounts.signTransaction({
              to: address.dataValues.address.toString(),
              value: oneEth.toString(),
              gas: 2000000
          }, process.env.ETH_PRIVATEKEY)

          const sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction) //트랜잭션 데이터가 매개변수로 들어감.
          .on('receipt', console.log); //서명된 트랜잭션 전송

          const serverBalance = await web3.eth.getBalance(address.dataValues.address.toString()); // 서버 계정의 잔액

          res.status(200).json({message: "Faucet Successed",
          data: {
              address: address.dataValues.address.toString(),  // 서버 계정의 지갑 주소
              balance: serverBalance,  // 서버 계정 이더 잔액
              txHash: sendResult.transactionHash  // 이더 faucet 트랜잭션 해시
          }});
        } else {
          res.status(502).send('Error: Faucet Transaction Failed')
        }
      } catch (error) {
        console.log(err);
      }
    },
  };