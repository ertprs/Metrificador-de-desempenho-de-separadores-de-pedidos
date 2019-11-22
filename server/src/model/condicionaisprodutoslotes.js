/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('condicionaisprodutoslotes', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDCondicional: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqProdCondicional: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeGerada: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    QtdeDevolvida: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Sequencia_Origem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'condicionaisprodutoslotes'
  });
};
