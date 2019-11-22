/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reducoesecf', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MarcaECF: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ModeloECF: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NumeroSerie: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ModoReducao: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    GrandeTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    Cancelamentos: {
      type: "DOUBLE",
      allowNull: true
    },
    Descontos: {
      type: "DOUBLE",
      allowNull: true
    },
    Tributos: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    TotalizadorParcial: {
      type: DataTypes.STRING(266),
      allowNull: true
    },
    Sangria: {
      type: "DOUBLE",
      allowNull: true
    },
    Suprimentos: {
      type: "DOUBLE",
      allowNull: true
    },
    TotNaoSujeitoICMS: {
      type: DataTypes.STRING(126),
      allowNull: true
    },
    ContadoresNSujeitoICMS: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    ContadorOrdemOperacao: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ContadorOperacaoNSujeitaICMS: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NAliquotasCadastradas: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DataMovimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Acrescimos: {
      type: "DOUBLE",
      allowNull: true
    },
    AcrescimosFinanceiros: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalNaoTributado: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalIsento: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalSubstituicao: {
      type: "DOUBLE",
      allowNull: true
    },
    NumeroOrdem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ContadorOrdemOperacaoInicioDia: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ContadorReducaoZ: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ContadorReinicioOperacao: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    VendaBruta: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'reducoesecf'
  });
};
