const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc    Regsiter New User
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please add all field");
  }

  // CHECK USER ALREADY EXIST OR NOT
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already Exist!");
  }

  // HASHED PASSWORD FROM REQ BODY
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // CREATE USER
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });

    //
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Authenticate or Login a User
// @route   POST  /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // CHECK FOR USER EMAIL
  const user = await User.findOne({ email });

  // COMPARE PASSWORD FROM REQ BODY WITH PASSWOR ALREADY HASHED IN DATABASE
  const comparePassword = await bcrypt.compare(password, user.password);

  // CHECK AND DISLPLAY USER DATA LOGIN
  if (user && comparePassword) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });

    //
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Get User Data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name,
    email,
  });

  //
});

// GENERATE JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
