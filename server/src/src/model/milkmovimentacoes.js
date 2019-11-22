/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkmovimentacoes', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataMovi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    codigoProdutor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorLiquido: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    PrecoLitroLeite: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    PrecoConseleite: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    PrecoIncQualidade: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    PrecoIncProducao: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    PrecoAdicional: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ValorAdiantamento: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorDebito: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorCredito: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    MesReferente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QuantidadeEntregue: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    AnoReferente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SubTotalLitroLeite: {
      type: "DOUBLE(11,6)",
      allowNull: true
    },
    codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    QtdEntregue: {
      type: "DOUBLE(11,3)",
      allowNull: true
    },
    Adiantamento: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    CreditoReais: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    DebitoReais: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    CreditoQtd: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    DebitoQtd: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorQualidade: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorProducao: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    Periodo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ValorPorLitro: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorAdicional: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorConseleite: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    EmpresaNome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EmpresaCnpj: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EmpresaTelefone: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ContaBanco: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ContaAgencia: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ContaConta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ContaTitular: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Modalidade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SubTotalValorLeite: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    Percentagem: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ProAtivos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ProInativos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ProTotal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Rota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataExcluido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    isQualidade: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    vlrGordura: {
      type: "DOUBLE(11,6)",
      allowNull: false,
      defaultValue: '0.000000'
    },
    vlrProteina: {
      type: "DOUBLE(11,6)",
      allowNull: false,
      defaultValue: '0.000000'
    },
    vlrCCS: {
      type: "DOUBLE(11,6)",
      allowNull: false,
      defaultValue: '0.000000'
    },
    vlrCBT: {
      type: "DOUBLE(11,6)",
      allowNull: false,
      defaultValue: '0.000000'
    },
    qtdGordura: {
      type: "DOUBLE(11,2)",
      allowNull: false,
      defaultValue: '0.00'
    },
    qtdProteina: {
      type: "DOUBLE(11,2)",
      allowNull: false,
      defaultValue: '0.00'
    },
    qtdCCS: {
      type: "DOUBLE(11,2)",
      allowNull: false,
      defaultValue: '0.00'
    },
    qtdCBT: {
      type: "DOUBLE(11,2)",
      allowNull: false,
      defaultValue: '0.00'
    },
    PadraoGordura: {
      type: "DOUBLE(11,2)",
      allowNull: false,
      defaultValue: '0.00'
    },
    PadraoProteina: {
      type: "DOUBLE(11,2)",
      allowNull: false,
      defaultValue: '0.00'
    },
    PadraoCCS: {
      type: "DOUBLE(11,2)",
      allowNull: false,
      defaultValue: '0.00'
    },
    PadraoCBT: {
      type: "DOUBLE(11,2)",
      allowNull: false,
      defaultValue: '0.00'
    },
    ValExtenso: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: ' '
    },
    PeriodoInicialReferente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PeriodoFinalReferente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ContaNomeBanco: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'milkmovimentacoes'
  });
};
