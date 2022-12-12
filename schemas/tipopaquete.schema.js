const Joi = require('joi');
//creacion de los campos que vamos a validar
const id = Joi.string()
              .uuid();//campo id, tema de formato
const nombre = Joi.string() //valor

                  .max(50);

const createTipoPaqueteSchema = Joi.object({
  nombre: nombre.required()//etiqueta < >Valor

});
//creación de los objetos de validación, los esquemas
const updateTipoPaqueteSchema = Joi.object({
  nombre: nombre

});

const getTipoPaqueteSchema = Joi.object({
  id: id.required()
});

module.exports = { createTipoPaqueteSchema, updateTipoPaqueteSchema, getTipoPaqueteSchema };
