const { Model, DataTypes, Sequelize } = require('sequelize');

const PAQUET_TABLE = 'paqueterias';

const paqueteriasSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  precio: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class paquetestia extends Model {
  static associate(){

  }
  static config(sequelize){
    return{
      sequelize,
      tableName: PAQUET_TABLE,
      modelName: 'paquetes',
      timestamps: false
    };
  }
}

module.exports = { PAQUET_TABLE, paqueteriasSchema, paquetestia  };
