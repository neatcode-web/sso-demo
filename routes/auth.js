const express = require("express");
const AuthController = require("../controllers/AuthController");
const router = express.Router();

router.get("/login", AuthController.login1);
router.post("/login", AuthController.login);

module.exports = router;