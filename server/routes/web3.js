var express = require("express");
var router = express.Router();

const { web3Controller } = require("../controller");

// * POST /web3/ethFaucet
router.post("/ethFaucet", web3Controller.ethFaucet.post);

// * POST /web3/createERC20
router.post("/createERC20", web3Controller.createERC20.post);

// * POST /web3/tokenExchange
router.post("/tokenExchange", web3Controller.tokenExchange.post);


module.exports = router;