// 해당 모델의 인스턴스를 models/index.js에서 가져옵니다.
const { Users } = require('../../models');


module.exports = {
  post: async (req, res) => {
    const userInfo = await Users.findOne({
      where: { userId: req.body.userId, password: req.body.password },
    });

    if (!userInfo) {

      res.status(404).send({message : "not authorized"});
    } else {
      
      req.session.save(function () {
        req.session.userId = userInfo.userId;
        res.json({data: userInfo, message : "ok"});
      })
    }
  }
}