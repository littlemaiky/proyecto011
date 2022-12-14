const { Model, DataTypes, Sequelize } = require('sequelize');

const VENT_TABLE = 'venta';

const VentaSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class Venta extends Model {
  static associate(){

  }
  static config(sequelize){
    return{
      sequelize,
      tableName: VENT_TABLE,
      modelName: 'venta',
      timestamps: false
    };
  }
}

module.exports = { VENT_TABLE, VentaSchema, Venta  };
