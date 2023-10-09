const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
// const jwt = require('jsonwebtoken');

const { User } = require('../../models');
const { HttpError, randomNumber } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

// const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const register = ctrlWrapper(async (req, res) => {
  const { name, email, password } = req.body;

  if (await User.findOne({ name })) {
    throw HttpError(409, 'Name already exists');
  }
  if (await User.findOne({ email })) {
    throw HttpError(409, 'Email already exists');
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarUrl = gravatar.url(email);
  const verificationCode = randomNumber(6);

  // await sendEmail(email, verificationCode);

  const user = await User.create({
    ...req.body,
    password: hashPassword,
    avatarUrl,
    verificationCode,
  });
  if (!user) throw HttpError(403, 'Failed to sign up');

  // const payload = { id: user._id };
  // const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, { expiresIn: '60s' });
  // const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, { expiresIn: '7d' });
  // const newUser = await User.findByIdAndUpdate(
  //   user._id,
  //   { accessToken, refreshToken },
  //   { new: true },
  // );
  res.status(201).json({ message: `Created: ${user.email}` });
});

module.exports = register;