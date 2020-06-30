const express = require("express");
const router1 = express.Router({ mergeParams: true });

const transcationService = require("../Services/transcation");

/* User Registration. */
router1.post("/register" ,transcationService.createTranscation);


module.exports = router1;