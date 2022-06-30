const { Board } = require("../../models");
const { User } = require("../../models");
const { checkAccessToken } = require("../../utils/jwt");
const getTokenBalance = require("../../Functions/getTokenBalance");

module.exports = {
  get: async (req, res) => {
    const authorization = req.headers["authorization"];
    console.log("req.headers: ", req.headers);

    if (!authorization) {
      return res.status(400).send({ data: null, message: "invalid access token" });
    }

    const token = authorization.split(" ")[1];
    const decoded = checkAccessToken(token);
    console.log("decoded: ", decoded);


    const user = await User.findOne({
      where: { userId: decoded.userId },
      attributes:  ['userName', 'phone']
    });

    const userData = {
      'userName' : user.dataValues.userName.toString(),
      'phone' : user.dataValues.phone.toString()
    };

    const userBalance = await getTokenBalance(decoded.address);

    const { count, rows } = await Board.findAndCountAll({
      where: { user_id: decoded.id },
    });

    console.log(userBalance);
    res.status(200).json({ data: rows, userData: userData, userBalance: userBalance, message: "ok" });
  },
};
