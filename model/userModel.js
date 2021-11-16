const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
  password: {
    type: String,
    min: [8, 'password must be atleast 8 letter'],
    required: true,
  },
  avatar: {
    type: String,
    default:
      'https://w7.pngwing.com/pngs/867/134/png-transparent-giant-panda-dog-cat-avatar-fox-animal-tag-mammal-animals-carnivoran.png',
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.checkPassword = async function (password, storedPassword) {
  return await bcrypt.compare(password, storedPassword);
};

const User = mongoose.models.user || mongoose.model('user', userSchema);
module.exports = User;
