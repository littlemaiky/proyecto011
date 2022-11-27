const { rejects } = require('assert');
const crypto = require('crypto'); //para crear codigos UUID
const boom = require('@hapi/boom');
const sequelize = require('./../libs/sequelize');
const setupModels = require('../db/models');

class ventaService {

  constructor() {

  }

  async create (data) {
    const nuevoventa = {
      id: crypto.randomUUID(), //creo productos y le coloco us ID
      ...data //desempaquetado
    };
    const salida = await models.ventas.create(nuevoventa);
    return salida; // devuelvo el nuevo producto en el metodo create
  }

  async find() {
    const salida = await models.ventas.findAll();
    return salida;
    //
    //
    //
    //
    //
    //
    //
    //
  }

  async findOne(id) {
    const venta = await models.ventas.findByPk(id);
    if(!venta){
      throw boom.notFound('Venta no encontrada');
    }
    return venta;
    // const vent =  this.ventas.find(venta => { //seguarda en la variable insum
    //   return venta.id === id;
    // }); //!ultizamos la negacición(!) para ver si es no es producto
    // if (!vent) { //consulta del error
    //   throw boom.notFound('Producto no encontrado'); //lanza un error boom
    // }
    // return vent; //si no es un error devuelve el insum
  }

  async update(id , changes) {
    const venta = await this.findOne(id);
    const salida = await venta.update(changes);
    return salida;
    // const index = this.ventas.findIndex(venta =>{
    //   return venta.id === id;
    // });
    // if (index === -1) {
    //   throw boom.notFound('Producto no encontrado');
    // }
    // const venta = this.ventas[index];
    // this.ventas[index] = {
    //   ...venta,
    //   ...changes
    // };
    // return this.ventas[index];
  }

  async delete(id) {
    const venta = await this.findOne(id);
    await venta.destroy();
    return { id };
  //   const index = this.ventas.findIndex(venta =>{
  //     return venta.id === id;
  //   });
  //   if (index === -1) {
  //     throw boom.notFound('Producto no encontrado');
  //   }
  //   this.ventas.splice(index, 1);
  //   return { id };
  }
}

module.exports = ventaService

