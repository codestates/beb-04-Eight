const abi = require('./abi');
const bytecode = require('./bytecode');
const { User } = require("../../models");

const Web3 = require('web3');

module.exports = {
    post: async(req,res) => {
        try {

            const web3 = new Web3('https://goerli.infura.io/v3/ef5065bb61304474b34bae83c3406c05'); 

            web3.eth.accounts.privateKeyToAccount(process.env.ETH_PRIVATEKEY);

            // const serverData = await User.findOne({
            //     where: { userId: 'server' },
            //     attributes:  ['address']
            // });

            // const serverAddress = serverData.dataValues.address.toString();

            const accounts = '0x7d92d20Bab36c5dBad87A89e30bCcD8DE6f8b02e';

            const myContract = new web3.eth.Contract(abi); // 컨트랙트 컴파일 시 생성된 abi로 myContract 객체 생성 

            const tokenName = 'testToken';

            const tokenSymbol = 'tt';

            myContract.deploy({  //컨트랙트 배포
                data:'0x' +  bytecode,
                arguments: [tokenName, tokenSymbol],
            })
            // .send({     //배포한 컨트랙트 전송
            //     from:accounts,
            //     gas:'1500000',
            // },(error,result)=>{
            //     console.log(error)
            // })
            // .then( data =>{
            //     const address = data.options.address;
            //     console.log(address); //배포된 컨트랙트의 주소
            //     res.status(200).json({
            //         message: "deploying Successed",
            //     })
            // })


            console.log('test');
            const signResult = await web3.eth.accounts.signTransaction({
                to: accounts,
                gas: 2000000
            }, process.env.ETH_PRIVATEKEY)
 
            console.log(signResult);


            const sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction) //트랜잭션 데이터가 매개변수로 들어감.
            .on('receipt', console.log); //서명된 트랜잭션 전송


            res.send('test');


            // .send({     //배포한 컨트랙트 전송
            //     from:accounts,
            //     gas:'1500000',
            // },(error,result)=>{
            //     console.log(error)
            // })
            // .then( data =>{
            //     const address = data.options.address;
            //     console.log(address); //배포된 컨트랙트의 주소
            //     res.status(200).json({
            //         message: "deploying Successed",
            //     })
            // })


            
        } catch (error) {
            res.status(502);
        }
        
    }
};