/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_resumo_comissao', {
    NomeFantasia: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    NF: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodV: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TIPo: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ''
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Modelo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataFinalizacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoCliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TotalPedido: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalPesoBruto: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    TotalPesoLiquido: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    TotalPrecoCadPro: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    ComissaoTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    VlrParcelasPagas: {
      type: "DOUBLE",
      allowNull: true
    },
    ComissaoJaLancada: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorComissaoPAgas: {
      type: "DOUBLE",
      allowNull: true
    },
    VlrParcelasPagasMes: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorComissaoPAgasGeral: {
      type: "DOUBLE",
      allowNull: true
    },
    ComissaoJaLancadaMes: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorComissaoPAgasMES: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalServFunc: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Vendedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ''
    },
    OBSINTERNA: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'temp_resumo_comissao'
  });
};
