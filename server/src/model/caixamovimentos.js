/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caixamovimentos', {
    Sequencia: {
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
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCaixa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Caixa: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoAbertura: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nDocumento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NPagamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorDocumento: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorJuros: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorPago: {
      type: "DOUBLE",
      allowNull: true
    },
    DataDocumento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    SaldoAnterior: {
      type: "DOUBLE",
      allowNull: true
    },
    Saldo: {
      type: "DOUBLE",
      allowNull: true
    },
    TipoMovimento: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CodigoConta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ContaRP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    nComissao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TipoComissao: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FuncComissao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoMovEstorno: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Historico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ValorSemJuros: {
      type: "DOUBLE",
      allowNull: true
    },
    NCompra: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodModalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    EmpOrigem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorPendente: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdePagamentos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    EmpresaOrigemConta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorMulta: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCorrecao: {
      type: "DOUBLE",
      allowNull: true
    },
    DataCompetencia: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodVendedor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TipoTransferencia: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    MovPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    CXM_UUID_PDV: {
      type: "BINARY(16)",
      allowNull: true
    },
    IdCampanhaDoacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'caixamovimentos'
  });
};
