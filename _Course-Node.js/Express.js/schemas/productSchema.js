const Joi = require("joi");

const id = Joi.string().uuid();
const name = Joistring().alphanum().min(3).max(30);
const price = Joi.number().float().min(1);

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
    createProductSchema,
    updateProductSchema,
    getProductSchema,
};