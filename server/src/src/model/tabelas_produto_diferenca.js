/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelas_produto_diferenca', {
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoTabela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Diferenca: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'tabelas_produto_diferenca'
  });
};
