/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtosfornecedor', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idProdutos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    IdFornecedor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Padrao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    CodFab: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DiasEntrega: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ValorNegociado: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'produtosfornecedor'
  });
};
