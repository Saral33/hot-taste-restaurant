const mongoose = require('mongoose');
const { validateEmail } = require('../utils/arrayMethods');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'User must have username'],
  },
  email: {
    type: String,
    required: [true, 'User must have email'],
    unique: true,
  },
  validate: {
    validator: validateEmail,
  },
  password: {
    type: String,
    min: [8, 'password must be atleast 8 letter'],
    required: true,
  },
  avatar: {
    type: String,
  },
});
