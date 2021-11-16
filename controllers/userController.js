const User = require('../model/userModel');
import catchAsync from '../utils/catchAsync';
import ErrorHandler from '../utils/errorHandler';

const registerUser = catchAsync(async (req, res, next) => {
  const { email, password, username } = req.body;

  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    return next(new ErrorHandler('User with this email already exist', 500));
  }

  const user = new User({ username, email, password });
  await user.save();
  res.json({
    message: 'User registered successfully',
  });
});

module.exports = { registerUser };
