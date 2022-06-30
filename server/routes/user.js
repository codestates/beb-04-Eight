var express = require("express");
var router = express.Router();

const { usersController } = require("../controller");

// * POST api/users/login
router.post("/login", usersController.login.post);

// * POST /users/logout
router.post("/logout", usersController.logout.post);

// * get /users/mypage
router.get("/mypage", usersController.mypage.get);

// * POST /users/join
router.post("/join", usersController.join.post);

// * GET /users/accessToken
router.get("/accesstoken", usersController.accesstoken.get);
// * GET /users/refreshToken
router.get("/refreshtoken", usersController.refreshtoken.get);

module.exports = router;

