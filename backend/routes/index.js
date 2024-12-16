const express = require("express");
const userRouter = require("./user");
const blogRouter = require("./blog")

const router = express.Router();


router.use("/user", userRouter);
router.use("/blog", blogRouter);


module.exports = router;
