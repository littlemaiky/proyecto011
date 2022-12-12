const { rejects } = require('assert');
const crypto = require('crypto'); //para crear codigos UUID
const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
const { paquetestia } = require('../db/models/paquete.model');

class TipoPaqueteService {

  constructor() {

  }

  async create (data) {
    const nuevoTipopaqueteria = {
      id: crypto.randomUUID(), //creo productos y le coloco us ID
      ...data //desempaquetado
    };
    const salida = await models.TipoPaquete.create(nuevoTipopaqueteria);
    return salida; // devuelvo el nuevo producto en el metodo create
  }

  async find() {
    const salida = await models.TipoPaquete.findAll();
    return salida;

  }

  async findOne(id) {
    const Tipopaquet = await models.TipoPaquete.findByPk(id,{include:paquetestia});
    if (!Tipopaquet) {
      throw boom.notFound('Paquete no encontrado');
    }
    return Tipopaquet;

  }

  async update(id , changes) {
    const Tipopaquet = await this.findOne(id);
    const salida = await Tipopaquet.update(changes);
    return salida;
  }

  async delete(id) {
    const Tipopaquet = await this.findOne(id);
    await Tipopaquet.destroy();
    return { id };

  }
}

module.exports = TipoPaqueteService
