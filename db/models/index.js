const { PAQUET_TABLE, paqueteriasSchema, paquetestia } = require('./paquete.model');
const { VENT_TABLE, VentaSchema, Venta } = require('./venta.model');

// otro tema
const { TIPOPAQUET_TABLE, TipoPaqueteSchema, TipoPaquete  } = require('./tipopaquete.model')

function setupModels(sequelize) {
  Venta.init(VentaSchema, Venta.config(sequelize));
  // otro tema
  paquetestia.init(paqueteriasSchema, paquetestia.config(sequelize));
  TipoPaquete.init(TipoPaqueteSchema, TipoPaquete.config(sequelize));
  TipoPaquete.associate(sequelize.models);
  paquetestia.associate(sequelize.models);
}

module.exports = setupModels;
