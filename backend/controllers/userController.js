// @desc    Regsiter New User
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
  res.json({
    message: "register User",
  });
};

// @desc    Authenticate or Login a User
// @route   POST  /api/users/login
// @access  Public
const loginUser = (req, res) => {
  res.json({
    message: "login User",
  });
};

// @desc    Get User Data
// @route   GET /api/users/me
// @access  Public
const getMe = (req, res) => {
  res.json({
    message: "User data display",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
