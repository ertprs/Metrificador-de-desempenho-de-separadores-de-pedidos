/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milk_motivonaocoleta', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IdRota: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IdProdutor: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IdMotivoNaoColeta: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Contato: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataNaoColeta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Latitude: {
      type: "DOUBLE",
      allowNull: true
    },
    Longitude: {
      type: "DOUBLE",
      allowNull: true
    },
    Precisao: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'milk_motivonaocoleta'
  });
};
