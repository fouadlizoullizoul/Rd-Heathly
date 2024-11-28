const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res
        .status(200)
        .send({ message: "User alredy exists", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newuser = new User(req.body);
    await newuser.save();
    res
      .status(201)
      .send({ message: "User created successfully", success: true });
  } catch (error) {
    res.status(500).send({ message: "Error creating user", success: false });
  }
});
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({email:req.body.email})
    if(!user){
      return res.status(200).send({message:"Invalide email or password",success:false})
    }
    const isMatch =await bcrypt.compare(req.body.password,user.password);
    if (!isMatch) {
      return res.status(200).send({ message: "Invalid email or password", success: false });
    }
      // Generate JWT
    const token = jwt.sign({id:user._id},process.env.SECRET_KEY,{expiresIn: '1h'})
    res.status(200).send({
      message: "Login successful",
      success: true,
      data: { token, user: { id: user._id, name: user.name, email: user.email } },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error logging in", success: false });
  }
});

module.exports = router;
