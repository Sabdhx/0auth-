const express = require("express");
const { google } = require("../Controller/googleAuth.js");
const router = express.Router();

router.post("/google",google)

module.exports = router
