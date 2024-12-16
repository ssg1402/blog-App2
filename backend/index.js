const express = require("express")
const mongoose = require('mongoose')
require('dotenv').config()


const mainRouter = require('./routes/index.js')
const app = express();
app.use(express.json());
app.use("/api/v1", mainRouter);
const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});