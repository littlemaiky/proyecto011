const Joi = require('joi');
//creacion de los campos que vamos a validar
const id = Joi.string()
              .uuid();//campo id
const nombre = Joi.string() //valor
                  .alphanum()
                  .min(8)
                  .max(20);
const precio = Joi.number() //valor
                  .integer()
                  .min(2);

const createPaqueteriaSchema = Joi.object({
  nombre: nombre.required(),//etiqueta < >Valor
  precio: precio.required()
});
//creación de los objetos de validación, los esquemas
const updatePaqueteriaSchema = Joi.object({
  nombre: nombre,
  precio: precio
});

const getPaqueteriaSchema = Joi.object({
  id: id.required()
});

module.exports = { createPaqueteriaSchema, updatePaqueteriaSchema, getPaqueteriaSchema };