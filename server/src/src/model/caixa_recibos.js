/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caixa_recibos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoMovimentos: {
      type: DataTypes.STRING(3000),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    },
    ValorPago: {
      type: "DOUBLE",
      allowNull: false
    },
    TextoAgrupado: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    NumeroRecibo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'caixa_recibos'
  });
};
