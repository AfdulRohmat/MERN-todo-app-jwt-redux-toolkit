const asyncHandler = require("express-async-handler");

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get Goals",
  });
});

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }

  res.status(200).json({
    message: "Post Goals",
  });
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update goal ${req.params.id}`,
  });
});

// @desc    Delete goal
// @route   DELEE /api/goals/:id
// @access  Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Delete goal ${req.params.id}`,
  });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
