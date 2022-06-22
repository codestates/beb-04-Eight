/* '/api'로 시작하는 url 관리 router 파일 */

const express = require("express");
const router = express.Router();

const userRouter = require("./user");
// const { boardRouter} = require('./board');

// * request URL : /api/users
router.use("/users", userRouter);
// * request URL : /api/board
// router.use("/board", boardRouter);

module.exports = router;
