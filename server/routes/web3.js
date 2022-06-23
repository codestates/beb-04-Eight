var express = require("express");
var router = express.Router();

const { web3Controller } = require("../controller");

// * POST /web3/ethFaucet
router.post("/ethFaucet", web3Controller.ethFaucet.post);

module.exports = router;