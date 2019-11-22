/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contasapagar_pedcompra', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoPedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    DataLancamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Historico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Npagamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoComprador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NDocumento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoFormaPagamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Juro: {
      type: "DOUBLE",
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Pedido_Recebido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'contasapagar_pedcompra'
  });
};
