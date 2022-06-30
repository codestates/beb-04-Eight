const bcrypt = require("bcrypt");
const { User } = require("../../models"); // 해당 모델의 인스턴스를 models/index.js에서 가져옴
const {  generateAccessToken, generateRefreshToken } = require("../../utils/jwt");

module.exports = {
  post: async (req, res) => {
    try {
      const { userId, password } = req.body;

      // DB에서 사용자 아이디 찾기
      const userInfo = await User.findOne({
        where: { userId: userId },
      });
      if (!userInfo) {
        return res.status(401).json({ message: "존재하지 않는 아이디입니다" });
      }

      // 아이디가 존재한다면, 비밀번호 일치여부 체크
      const result = await bcrypt.compare(password, userInfo.password);
      if (!result) {
        return res.status(401).json({ message: "비밀번호가 틀렸습니다" });
      }

      const accessToken = generateAccessToken(userInfo.dataValues); // accessToken
      const refreshToken = generateRefreshToken(userInfo.dataValues); // refreshToken
    
      const option = { httpOnly: true }
      res.cookie("refreshToken", refreshToken, option);
    
      return res.status(200).send({ data: { accessToken }, message: "login success" });

    } catch (err) {
      console.log(err);
    }
  },
};
