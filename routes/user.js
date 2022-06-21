var express = require('express');
var router = express.Router();

const { usersController } = require('../controller');

// * POST /users/login
router.post('/login', usersController.login.post);

// * POST /users/logout
router.post('/logout', usersController.logout.post);

// * get /users/mypage
router.get('/mypage', usersController.mypage.get);

module.exports = router;
