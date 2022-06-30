const { checkRefreshToken, generateAccessToken } = require("../../utils/jwt");

module.exports = {
  get: (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res
        .status(400)
        .send({ data: null, message: "refresh token not provided" });
    }

    try {
      const data = checkRefreshToken(refreshToken);
      delete data.iat;
      delete data.exp;
      const accessToken = generateAccessToken(data);
      return res
        .status(200)
        .send({ data: { accessToken, userInfo: data }, message: "ok" });
    } catch (err) {
      return res.status(400).send({
        data: null,
        message: "invalid refresh token, please log in again",
      });
    }
  }
};