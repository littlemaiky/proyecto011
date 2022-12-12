const Joi = require('joi');
//creacion de los campos que vamos a validar
const id = Joi.string()
              .uuid();//campo id
const nombre = Joi.string() //valor
                  .min(8)
                  .max(50);

const createVentaSchema = Joi.object({
  nombre: nombre.required(),//etiqueta < >Valor

});
//creación de los objetos de validación, los esquemas
const updateVentaSchema = Joi.object({
  nombre: nombre,

});

const getVentaSchema = Joi.object({
  id: id.required()
});

module.exports = { createVentaSchema, updateVentaSchema, getVentaSchema };
