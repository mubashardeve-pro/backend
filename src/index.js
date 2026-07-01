const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authMiddleware = require("./middlewares/authMiddleware");
const globalErrorHandler = require("./utils/errorController");

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
app.send("/",(req,res)=>{
  res.send("Home Page")
})

app.use(express.json({ limit: "15mb" }));
app.use(cookieParser());

app.use("/api/v1", authMiddleware, require("./routes"));

app.use(globalErrorHandler);

module.exports = app;