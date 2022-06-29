/* '/api'로 시작하는 url 관리 router 파일 */

const express = require("express");
const router = express.Router();

const userRouter = require("./user");
// const { boardRouter} = require('./board');
const web3Router = require("./web3");

// * request URL : /api/users
router.use("/users", userRouter);
// * request URL : /api/board
// router.use("/board", boardRouter);
// * request URL : /api/web3
router.use("/web3", web3Router);

module.exports = router;
