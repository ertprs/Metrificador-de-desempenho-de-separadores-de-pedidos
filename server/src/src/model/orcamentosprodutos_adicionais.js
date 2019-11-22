/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orcamentosprodutos_adicionais', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SequenciaProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoOrcamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoAdicional: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Quantidade: {
      type: "DOUBLE UNSIGNED",
      allowNull: false,
      defaultValue: '0'
    },
    ValorUnitario: {
      type: "DOUBLE UNSIGNED",
      allowNull: false,
      defaultValue: '0'
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'orcamentosprodutos_adicionais'
  });
};
