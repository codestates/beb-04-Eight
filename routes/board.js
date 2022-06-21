var express = require("express");
var router = express.Router();

const { boardController } = require("../controller");

router.get("/boardList", boardController.boardList.get);

router.get("/boardDetail/:id", boardController.boardDetail.get);

module.exports = router;
