require("dotenv").config();
const express = require("express");
require('./Mongodb/mongodb')
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const path  = require('path')


console.log(process.env.SECRET_JSON_TOKEN)
const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests, please try again later",
});

app.use(limiter);

console.log(path.join(__dirname, "Images"))

app.use(express.static(path.join(__dirname, "Images")));

app.use('/',require('./SRC/Router/admin'))
app.use('/',require('./SRC/Router/product'))



app.listen(5000, () => console.log("started"));
