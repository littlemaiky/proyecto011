const { Model, DataTypes, Sequelize } = require('sequelize');
const { TIPOPAQUET_TABLE } = require('./tipopaquete.model');

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
  // tipoPaqueteId:{
  //   field: 'tipoPaquete_id',
  //   allowNull: true,
  //   type: DataTypes.UUID,
  //   references:{
  //     model: TIPOPAQUET_TABLE,
  //     key: 'id'
  //   },
  //   onUpdate: 'CASCADE',
  //   onDelete: 'SET NULL'
  // },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class paquetestia extends Model {
  static associate(models){
  this.belongsTo(models.TipoPaquete, {foreignKey: 'pertenecetipopaquete'});
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
