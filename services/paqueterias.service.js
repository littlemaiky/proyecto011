const { rejects, throws } = require('assert');
const crypto = require('crypto'); //para crear codigos UUID
const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
const { TipoPaquete } = require('../db/models/tipopaquete.model');

class paqueteriaService {

  constructor() {

  }

  async create (data) {
    const nuevopaqueteria = {
      id: crypto.randomUUID(), //creo productos y le coloco us ID
      ...data //desempaquetado
    };
    const salida = await models.paquetes.create(nuevopaqueteria);
    return salida; // devuelvo el nuevo producto en el metodo create
  }

  async find() {
    const salida = await models.paquetes.findAll({include: TipoPaquete});
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
    const paquet = await models.paquetes.findByPk(id);
    if (!paquet) {
      throw boom.notFound('Paquete no encontrado');
    }
    return paquet;
    // const paquet =  this.paqueterias.find(paqueteria => { //seguarda en la variable insum
    //   return paqueteria.id === id;
    // }); //!ultizamos la negacición(!) para ver si es no es producto
    // if (!paquet) { //consulta del error
    //   throw boom.notFound('Producto no encontrado'); //lanza un error boom
    // }
    // return paquet; //si no es un error devuelve el insum
  }

  async update(id , changes) {
    const paquet = await this.findOne(id);
    const salida = await paquet.update(changes);
    return salida;
    // const index = this.paqueterias.findIndex(paqueteria =>{
    //   return paqueteria.id === id;
    // });
    // if (index === -1) {
    //   throw boom.notFound('Producto no encontrado');
    // }
    // const paqueteria = this.paqueterias[index];
    // this.paqueterias[index] = {
    //   ...paqueteria,
    //   ...changes
    // };
    // return this.paqueterias[index];
  }

  async delete(id) {
    const paquet = await this.findOne(id);
    await paquet.destroy();
    return { id };
    // const index = this.paqueterias.findIndex(paqueteria =>{
    //   return paqueteria.id === id;
    // });
    // if (index === -1) {
    //   throw boom.notFound('Producto no encontrado');
    // }
    // this.paqueterias.splice(index, 1);
    // return { id };
  }
}

module.exports = paqueteriaService
