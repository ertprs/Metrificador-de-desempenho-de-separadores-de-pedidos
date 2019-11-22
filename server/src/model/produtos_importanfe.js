/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_importanfe', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CNPJ_Fornecedor: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    Produto_Fornecedor: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'produtos_importanfe'
  });
};
