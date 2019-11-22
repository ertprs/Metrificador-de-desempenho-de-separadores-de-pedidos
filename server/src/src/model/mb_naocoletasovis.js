/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mb_naocoletasovis', {
    IdNaoColeta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IdRota: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IdCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IdMotivoNaoColeta: {
      type: DataTypes.STRING(50),
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
      allowNull: false,
      defaultValue: '0'
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
    },
    DataHoraIncSovis: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DataHoraEnvioSovis: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'mb_naocoletasovis'
  });
};
