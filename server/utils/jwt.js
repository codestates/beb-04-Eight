require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");
function generateAccessToken(data) {
  return sign(data, process.env.ACCESS_SECRET, { expiresIn: "50000s" });
}

function generateRefreshToken(data) {
  return sign(data, process.env.REFRESH_SECRET, { expiresIn: "1d" });
}

function checkAccessToken(accessToken) {
  return verify(accessToken, process.env.ACCESS_SECRET);
}

function checkRefreshToken(refreshToken) {
  return verify(refreshToken, process.env.REFRESH_SECRET);
}
module.exports = {
  generateAccessToken,
  generateRefreshToken,
  checkAccessToken,
  checkRefreshToken,
};