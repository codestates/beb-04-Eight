const bcrypt = require("bcrypt");
const { User } = require("../../models"); // 해당 모델의 인스턴스를 models/index.js에서 가져옴

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
      // 비밀번호가 일치한다면, session에 아이디 정보 저장
      req.session.save(function () {
        req.session.userId = userInfo.userId;
        res.status(201).json({ message: "login success" });
      });
    } catch (err) {
      console.log(err);
    }
  },
};
