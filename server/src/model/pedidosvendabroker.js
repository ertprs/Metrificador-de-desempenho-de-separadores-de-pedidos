/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidosvendabroker', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    CodigoPedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NumeroPedido: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeItens: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalVenda: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalCusto: {
      type: "DOUBLE",
      allowNull: true
    },
    EmailEnviado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Faturado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DataFaturado: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    RazaoFornecedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RazaoCliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EstadoAtual: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DataFornecedor: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NotaFornecedor: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'pedidosvendabroker'
  });
};
