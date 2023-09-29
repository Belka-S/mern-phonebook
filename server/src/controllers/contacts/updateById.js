const { HttpError, filterValues } = require('../../utils');

const { Contact } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const updateById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const newContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!newContact) throw HttpError(403);

  res
    .status(200)
    .json({ status: 'success', code: 200, result: { contact: filterValues(newContact) } });
});

module.exports = updateById;
