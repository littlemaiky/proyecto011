const { Model, DataTypes, Sequelize } = require('sequelize');

const TIPOPAQUET_TABLE = 'tipopaquete';

const TipoPaqueteSchema = {
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

class TipoPaquete extends Model {
  static associate(models){
  this.hasMany(models.paquetes,{foreignKey: 'pertenecetipopaquete'});
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: TIPOPAQUET_TABLE,
      modelName: 'TipoPaquete',
      timestamps: false
    };
  }
}

module.exports = { TIPOPAQUET_TABLE, TipoPaqueteSchema, TipoPaquete  };
