/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkexames', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Qtd: {
      type: "DOUBLE",
      allowNull: false
    },
    Parametro: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    DtAdicionado: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Us_Ter: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    DtExcluido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UM: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: '%'
    },
    PosNeg: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'milkexames'
  });
};
