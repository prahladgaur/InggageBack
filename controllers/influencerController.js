//const { trusted } = require('mongoose');
const influencerModel = require("../models/influencerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//create influencer
exports.registerInfluencerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //validation
    if (username || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please fill all fields",
      });
    }
    //existing user
    const existingUser = await influencerModel.findOne({ email });
    if (existingUser) {
      return res.status(401).send({
        success: false,
        message: "user already exists",
      });
    }

    //hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);
    //password = hashedPassword;

    //save new user
    const user = new influencerModel({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "New User Created",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in register callback",
      success: false,
      error,
    });
  }
};

//get all influncers
exports.getAllInfluencerController = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).send({
      userCount: users.length,
      success: true,
      message: "all users data",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in get all users",
      error,
    });
  }
};

//login influencer
exports.loginInfluencerController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        message: "please provide email or password",
      });
    }
    const user = await influencerModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "email is not registered",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid username or Password",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.KEY, {
      expiresIn: "1h",
    });
    //res.status(200).send({ token });
    res.cookie("token", token, { httpOnly: true, maxAge: 360000 });

    return res.json({
      status: true,
      token: token,
      message: "login successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in login callback",
      error,
    });
  }
};

// Logout Controller
exports.logoutInfluencerController = async (req, res) => {
  res.clearCookie("token");
  return res.json({ status: true });
};

//Update influencer
exports.updateInfluencerController = async (req, res) => {
  ///////   logic for Update influencer
};

//Delete influencer
exports.deleteInfluencerController = async (req, res) => {
  ///////   logic for delete influencer
};
