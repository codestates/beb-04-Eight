const { Board } = require("../../models");
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

    const userBalance = await getTokenBalance(decoded.address);

    const { count, rows } = await Board.findAndCountAll({
      where: { user_id: decoded.id },
    });

    console.log(count, rows);
    console.log(userBalance);
    res.status(200).json({ data: rows, userBalance: userBalance, message: "ok" });
  },
};
