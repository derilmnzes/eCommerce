const express = require("express");
const path = require("path");
const Product = require("../Modules/product");
const router = express.Router();
const fs = require("fs");
const multer = require("multer");

function generateId() {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base 36 string
  const randomChars = Math.random().toString(36).slice(2); // Get a random string of characters and remove "0." prefix
  return timestamp + randomChars;
}

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "Images");
    },
    filename: (req, file, cb) => {
      cb(null, generateId() + "-" + file.originalname);
    },
  }),
});

router.post("/add/product", upload.single("image"), async (req, res) => {
  try {
    const { title, price, description, category, rating } = req.body;

    const imagePath = req.file;
    console.log(imagePath);
    const newProduct = new Product({
      title,
      description,
      category,
      price,
      image: `/${imagePath.filename}`,
      rating,
    });
    await newProduct.save();
    res.status(200).send("Product has been saved");
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: "Something went wrong,Please try again ",
    });
  }
});

router.get("/get/products", async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).send(products);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
