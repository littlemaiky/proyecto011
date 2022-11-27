const { Model, DataTypes, Sequelize } = require('sequelize');

const VENTA_TABLE = 'Ventas';

const VentaSchema = {
  id: {
    primarykey: true,
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

class Ventas extends Model {
  static associate(){

  }
  static config(sequelize){
    return{
      sequelize,
      tableName: VENTA_TABLE,
      modelName: 'ventas',
      timestamps: false
    };
  }
}

module.exports = { VENTA_TABLE, VentaSchema, Ventas  };
