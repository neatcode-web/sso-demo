const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
	res.sendFile(process.cwd()+"/client/dist/sso-demo/index.html")
});

module.exports = router;
