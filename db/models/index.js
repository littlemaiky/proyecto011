const { PAQUET_TABLE, paqueteriasSchema, paquetestia } = require('./paquete.model');
const { VENT_TABLE, VentaSchema, Venta } = require('./venta.model');


function setupModels(sequelize) {
  paquetestia.init(paqueteriasSchema, paquetestia.config(sequelize));
  Venta.init(VentaSchema, Venta.config(sequelize));
}

module.exports = setupModels;
