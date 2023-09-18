const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');
const { HttpError, sendEmail } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const { ACCESS_SECRET_KEY } = process.env;

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
  const verificationCode = (Math.random() * 100000).toFixed(0);

  // await sendEmail(email, verificationCode);

  const user = await User.create({
    ...req.body,
    password: hashPassword,
    avatarUrl,
    verificationCode,
  });

  const payload = { id: user._id };
  const token = jwt.sign(payload, ACCESS_SECRET_KEY, { expiresIn: '23h' });
  const newUser = await User.findByIdAndUpdate(user._id, { token }, { new: true });
  if (!newUser) throw HttpError(403);

  res.status(201).json({ status: 'success', code: 201, result: { user: newUser } });
});

module.exports = register;