var express = require("express");
var router = express.Router();

const { boardController } = require("../controller");

// * GET /board/boardList
router.post("/boardList", boardController.boardList.post);

// * POST /board/isnertBoard
router.post("/insertBoard", boardController.insertBoard.post);

// * GET /board/boardDetail/:id
router.get("/boardDetail/:id", boardController.boardDetail.get);

// * PUT /board/boardDetail/:id
router.put("/boardDetail/:id", boardController.boardDetail.put);

// * DELETE /board/boardDetail/:id
router.delete("/boardDetail/:id", boardController.boardDetail.delete);

// * GET /board/findAll
router.get("/findall", boardController.findAll.get);

module.exports = router;
