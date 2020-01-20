const argon2 = require('argon2');
const randomBytes = require('randombytes');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const User = require('../models/User');

const secret = process.env.JWT_SECRET;

const register = async ({ email, password }) => {
  const salt = randomBytes(32);
  const hashedPassword = await argon2.hash(password, { salt });

  const user = await User.create({
    email,
    password: hashedPassword,
  });
  // Be careful not to send password or salt
  return {
    email: user.email,
  };
};

const authenticate = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordCorrect = await argon2.verify(user.password, password);
  if (!isPasswordCorrect) {
    throw new Error('Incorrect password');
  }

  const payload = {
    id: user.id,
  };

  return {
    token: jwt.sign(payload, secret, { expiresIn: '6h' }),
  };
};

const isAuthenticated = expressJWT({
  secret, // Same secret as when we signed
});

module.exports = {
  register,
  authenticate,
  isAuthenticated,
};
