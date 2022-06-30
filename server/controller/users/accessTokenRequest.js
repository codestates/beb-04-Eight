const { checkAccessToken } = require("../../utils/jwt");

module.exports = {
  get: (req, res) => {
    const authorization = req.headers["authorization"];

    if (!authorization) {
      return res
        .status(400)
        .send({ data: null, message: "invalid access token" });
    }

    const token = authorization.split(" ")[1];

    try {
      const data = checkAccessToken(token);
      delete data.iat;
      delete data.exp;
      return res.status(200).send({ data: { userInfo: data }, message: "ok" });
    } catch {
      return res
        .status(400)
        .send({ data: null, message: "access token has been tempered" });
    }
  }
};