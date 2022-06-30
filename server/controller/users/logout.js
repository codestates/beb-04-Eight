const { checkAccessToken } = require("../../utils/jwt");

module.exports = {
  post: (req, res) => {
    const accessToken = req.body.accessToken;
    console.log("header",req.cookies);
    if(!accessToken){
      return res.status(400).json({ message: "로그아웃 실패" });
    }
    console.log("check",checkAccessToken(accessToken));
    res.status(200).json({ message: "로그아웃 성공" });

    console.log("LOGOUT!!! ");
  },
};
