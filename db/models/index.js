const { VENTA_TABLE, VentaSchema, Ventas } = require('./venta.model')

function setupModels(sequelize) {
  Ventas.init(VentaSchema, Ventas.config(sequelize));
}

module.exports = setupModels;
