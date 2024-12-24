const express = require("express")
const connectDB = require('mongoose')
require('dotenv').config();

const PORT = process.env.PORT || 2000;

const mainRouter = require('./routes/index.js')
const app = express();
app.use(express.json());
app.use("/api/v1", mainRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});