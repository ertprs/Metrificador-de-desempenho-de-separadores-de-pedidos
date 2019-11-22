/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coletasovis', {
    IDCOLETA: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDCOLETAERP: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    IDCLIENTE: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    IDUSUARIO: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    IDROTA: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    IDEMPRESA: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    VOLUMECOLETADO: {
      type: "DOUBLE",
      allowNull: true
    },
    VOLUMECOLETADOTOTAL: {
      type: "DOUBLE",
      allowNull: true
    },
    AMOSTRA: {
      type: "DOUBLE",
      allowNull: true
    },
    TEMPERATURA: {
      type: "DOUBLE",
      allowNull: true
    },
    ALIZAROL: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    OBSERVACAO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LATITUDE: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    LONGITUDE: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    PRECISAO: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    DATAHORA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATAHORAINC: {
      type: DataTypes.DATE,
      allowNull: false
    },
    STATUS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'coletasovis'
  });
};
