/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notassaidasprodutoslotes', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqNF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqProdNF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoLote: {
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
    Identificador: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    UltimaNF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MovEst: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    SeqVendasProdutos: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SeqVendasProdutosLotes: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NFCancelada: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'notassaidasprodutoslotes'
  });
};
