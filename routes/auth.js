const express = require("express");
//var app=express();
const router = express.Router({ mergeParams: true });
const authService = require("../Services/auth");
const transcationService = require("../Services/transcation");
/* User Registration. *///
router.post("/register", authService.register);


/* User Login. */
router.post("/login", authService.login);
router.get("/member", authService.member);
router.post("/createtrans" ,transcationService.createTranscation);
router.post("/updatetrans" ,transcationService.updateTranscation);

router.get("/getAllTrans" ,transcationService.getAllTranscation);
router.get("/findmember/" ,authService.getCurrentUser);



module.exports = router;