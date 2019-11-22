/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fidelize_pedidos', {
    CNPJ: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PrazoNegociado: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MotivoPedido: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FormaParcelamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TipodeVenda: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoPedidoCliente: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Margem: {
      type: "DOUBLE",
      allowNull: true
    },
    FlagTipoPedido: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    VersaoLayout: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    SiglaIndustria: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FlagRecalculoDesconto: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FlagCNPJ: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Processado: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    Aceito: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Arquivo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IDPedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Verificado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TipoFaturamento: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    ApontadorPromocao: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    CodigoControle: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    CodigoProjeto: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PedidoPharmaLink: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TipoPagamento: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    NumeroPedidoPrincipal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NDiasPrazo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ProcessadoRetorno: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    IdentificadorLaboratorio: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TipoCancelamento: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ProcessadoCancelamento: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    validado: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CNPJEntrega: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    TipoPedido: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NPedidoEletronico: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DataGeraPedidoPDV: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraGeraPedidoPDV: {
      type: DataTypes.TIME,
      allowNull: true
    },
    DataGeraPedidoPLK: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraGeraPedidoPLK: {
      type: DataTypes.TIME,
      allowNull: true
    },
    DataPrevistaFaturamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    MotivoCancelamento: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    tableName: 'fidelize_pedidos'
  });
};
