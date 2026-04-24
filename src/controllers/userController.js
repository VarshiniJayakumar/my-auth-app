// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = async (req, res) => {
  try {
    // req.user is already set by the protect middleware
    res.status(200).json({
      success: true,
      message: 'User profile retrieved successfully',
      data: req.user
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getMe,
};
