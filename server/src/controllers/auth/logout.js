const { User } = require('../../models/user');
const { HttpError } = require('../../utils');

const logout = async (req, res) => {
  const newUser = await User.findByIdAndUpdate(req.user._id, { token: null }, { new: true });
  if (!newUser) throw HttpError(403);

  res.status(200).json({ message: 'Logged out' });
};

module.exports = logout;