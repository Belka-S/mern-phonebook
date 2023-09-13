const Joi = require('joi');

const { joiError, regExp } = require('../utils');

const groupList = ['private', 'work', 'sport'];

const addSchema = Joi.object({
  name: Joi.string().min(4).required(),
  phone: Joi.string().pattern(regExp.phone).required(),
  email: Joi.string().pattern(regExp.email).error(joiError.email),
  whatsapp: Joi.string().pattern(regExp.phone),
  viber: Joi.string().pattern(regExp.phone),
  telegram: Joi.string().pattern(regExp.telegram),
  birthday: Joi.string().pattern(regExp.date),
  group: Joi.string().valid(...groupList),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({ favorite: Joi.boolean().required() });

const schemas = { addSchema, updateFavoriteSchema };

module.exports = { schemas };
