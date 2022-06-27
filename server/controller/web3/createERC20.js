const abi = require('./abi');
const bytecode = require('./bytecode');
const { User } = require("../../models");

const Web3 = require('web3');

module.exports = {
    post: async(req,res) => {
        try {
            const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545')); //가나슈로부터 web3 객체 생성

            const accounts = await web3.eth.getAccounts()

            const myContract = new web3.eth.Contract(abi); // 컨트랙트 컴파일 시 생성된 abi로 myContract 객체 생성 

            // const provider = new ethers.providers.Web3Provider(window.ethereum)
            // await provider.send("eth_requestAccounts", []);
            // const signer = provider.getSigner() 

            myContract.deploy({  //컨트랙트 배포
                data:'0x' +  bytecode,
                arguments: ['testToken3', 'tt'],
            })
            .send({     //배포한 컨트랙트 전송
                from:accounts[0],
                gas:'1500000',
            },(error,result)=>{
                console.log(error)
            })
            .then( data =>{
                console.log(data.options.address); //배포된 컨트랙트의 주소
                res.status(200).send('컨트랙트 배포 성공');
            })
            
        } catch (error) {
            console.log(error)
        }
        
    }
};