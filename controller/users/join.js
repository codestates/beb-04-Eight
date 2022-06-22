const bcrypt = require("bcrypt");
// 해당 모델의 인스턴스를 models/index.js에서 가져옵니다.
const { User } = require("../../models");

module.exports = {
  post: async (req, res, next) => {
    try {
      const { userId, userName, password, phone } = req.body;

      // 아이디 중복 체크
      const checkID = await User.findOne({
        where: {
          userId: userId,
        },
      });

      // 아이디가 DB에 있으면
      if (checkID) {
        // status code 409
        return res.status(409).send("이미 사용중인 아이디입니다.");
      } else {
        // 아이디가 DB에 없으면
        // 비밀번호 해쉬화하고
        const hashedPassword = await bcrypt.hash(password, 12);
        // DB에 저장
        await User.create({
          userId: userId,
          password: hashedPassword,
          userName: userName,
          phone: phone,
        });
        // status 201 응답
        res.status(201).send("create User!");
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};
