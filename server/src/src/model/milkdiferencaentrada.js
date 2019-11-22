/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkdiferencaentrada', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Diferenca: {
      type: "DOUBLE(11,3)",
      allowNull: true
    },
    IdTransportador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    EntradaTransportador: {
      type: "DOUBLE(11,3)",
      allowNull: true,
      defaultValue: '0.000'
    },
    EntradaProdutor: {
      type: "DOUBLE(11,3)",
      allowNull: true,
      defaultValue: '0.000'
    }
  }, {
    tableName: 'milkdiferencaentrada'
  });
};
