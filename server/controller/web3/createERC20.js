const abi = require('./abi');
const bytecode = require('./bytecode');
const { User } = require("../../models");

const Web3 = require('web3');

module.exports = {
    post: async(req,res) => {
        try {

            // 메타마스크 지갑 연동으로 변경할 경우 아래의 코드 사용
            // const web3 = new Web3(window.ethereum); 

            const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545')); //가나슈로부터 web3 객체 생성

            const accounts = await web3.eth.getAccounts()

            const myContract = new web3.eth.Contract(abi); // 컨트랙트 컴파일 시 생성된 abi로 myContract 객체 생성 

            const tokenName = 'testToken';

            const tokenSymbol = 'tt';

            myContract.deploy({  //컨트랙트 배포
                data:'0x' +  bytecode,
                arguments: [tokenName, tokenSymbol],
            }).send({     //배포한 컨트랙트 전송
                from:accounts[0],
                gas:'1500000',
            },(error,result)=>{
                console.log(error)
            })
            .then( data =>{
                const address = data.options.address;
                console.log(address); //배포된 컨트랙트의 주소
                res.status(200).json({
                    message: "deploying Successed",
                })
            })
            
        } catch (error) {
            res.status(502);
        }
        
    }
};