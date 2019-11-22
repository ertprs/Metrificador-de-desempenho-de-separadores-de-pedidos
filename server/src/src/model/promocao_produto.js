/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promocao_produto', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqPromocao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Bonus: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeMin: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeMax: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCusto: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorVenda: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorPromocao: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeMaxPromocao: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'promocao_produto'
  });
};
