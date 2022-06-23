const bcrypt = require("bcrypt");
// 해당 모델의 인스턴스를 models/index.js에서 가져옵니다.
const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    try {
      const { userId, password } = req.body;
      // DB에서 사용자 찾기
      const userInfo = await User.findOne({
        where: { userId: userId },
      });
      if (userInfo) {
        // 비밀번호 체크 (입력한 비밀번호와 DB 비밀번호 비교)
        const result = await bcrypt.compare(password, userInfo.password);
        if (result) {
          req.session.save(function () {
            req.session.userId = userInfo.userId;
            res.status(201).json({ message: "login success" });
          });
        } else {
          res.status(401).json({ message: "비밀번호가 틀렸습니다" });
        }
      } else {
        res.status(401).json({ message: "없는 아이디입니다" });
      }
    } catch (err) {
      console.log(err);
    }
  },
};
