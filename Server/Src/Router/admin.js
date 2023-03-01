const express = require("express");
const router = express.Router();
const Admin = require("../Modules/admin");
const bcrypt = require("bcrypt");
const json = require("jsonwebtoken");

router.post("/admin/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (admin) {
      const verifyPassword = await bcrypt.compare(password, admin.password);
      if (verifyPassword) {
        const payload = {
          userid: admin.id,
          username: admin.name,
        };
        const secret = process.env.SECRET_JSON_TOKEN;
      
        const token = json.sign(payload, secret, { expiresIn: "1h" });
        res.status(200).send({
          message: "user loged in success fully",
          token,
        });
      } else {
        res.status(400).send("User password is wrong");
      }
    } else {
      res.status(400).send("User is not valid please try again");
    }
  } catch (err) {
    console.log(err)
    res.status(400).send({
      message:"Something went wrong,Please try again ",
    });
  }
});

router.post("/admin/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const admin = new Admin({
      name,
      email,
      password: hash,
    });

    await admin.save();
    res.status(200).send("Created");
  } catch (err) {
    res.send(err);
  }
});



module.exports = router;
