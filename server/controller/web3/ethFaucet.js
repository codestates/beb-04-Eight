const Web3 = require('web3');

module.exports = {
    post: async (req, res) => {
      // TODO: 세션 아이디를 통해 고유한 세션 객체에 접근할 수 있습니다.
      // 앞서 로그인시 세션 객체에 저장했던 값이 존재할 경우, 이미 로그인한 상태로 판단할 수 있습니다.
      // 세션 객체에 담긴 값의 존재 여부에 따라 응답을 구현하세요.
      //     서버의 세션 정보를 삭제해야 합니다.
      // 클라이언트의 쿠키를 갱신해야 합니다.
      // 서버가 클라이언트의 쿠키를 임의로 삭제할 수는 없습니다. 대신, set-cookie로 세션 아이디의 키값을 무효한 값으로 갱신해야 합니다.
  
      const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

      const accounts = await web3.eth.getAccounts();

      console.log(accounts);
      res.send(accounts);
    },
  };