/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidospandolfiprodutos', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoPedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Linha: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoLocal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Local: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoItem: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ValorUnitario: {
      type: "DOUBLE",
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    DataLimiteEntrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoCategoria: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LiberadoEntrega: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'pedidospandolfiprodutos'
  });
};
