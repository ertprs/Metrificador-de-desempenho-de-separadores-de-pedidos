/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('despacho_op_produtos', {
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoDespacho: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CodigoProdutos: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Produtos: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    NPecas: {
      type: "DOUBLE",
      allowNull: false
    },
    ValorPecas: {
      type: "DOUBLE",
      allowNull: false
    },
    NomeProdutos: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'despacho_op_produtos'
  });
};
