const bcrypt = require("bcrypt");
const lightwallet = require("eth-lightwallet");
// 해당 모델의 인스턴스를 models/index.js에서 가져옵니다.
const { User } = require("../../models");
const serveToken = require("../../Functions/ServeToken");

module.exports = {
  post: async (req, res, next) => {
    try {
      const { userId, userName, password, phone, introduction } = req.body;

      // 아이디 중복 체크
      const checkID = await User.findOne({
        where: {
          userId: userId,
        },
      });

      // 아이디가 DB에 있으면
      if (checkID) {
        // status code 409
        return res.status(409).json({ message: "이미 사용중인 아이디입니다." });
      }
      // 아이디가 DB에 없으면
      // 비밀번호 해쉬화하고
      const hashedPassword = await bcrypt.hash(password, 12);

      // 지갑을 생성하고
      let mnemonic;
      mnemonic = lightwallet.keystore.generateRandomSeed();
      lightwallet.keystore.createVault(
        {
          password: password,
          seedPhrase: mnemonic,
          hdPathString: "m/0'/0'/0'",
        },
        function (err, ks) {
          ks.keyFromPassword(password, function (err, pwDerivedKey) {
            ks.generateNewAddress(pwDerivedKey, 1);

            let address = ks.getAddresses().toString();
            let privateKey = ks.exportPrivateKey(address, pwDerivedKey);
            // DB에 지갑 주소와 privateKey 저장
            User.create({
              userId: userId,
              password: hashedPassword,
              userName: userName,
              phone: phone,
              introduction: introduction,
              address: address,
              privateKey: privateKey,
            }).then(async() => serveToken(address));
            res.status(201).json({ message: "create User!" });
          });
        }
      );
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};
