/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servicos', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ValorCusto: {
      type: "DOUBLE",
      allowNull: true
    },
    Percentual: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorVenda: {
      type: "DOUBLE",
      allowNull: true
    },
    Detalha: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TempoGarantia: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ServicoTerceiro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoFornecedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TabelaComissao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Ativo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ServicoProprio: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    QtdeemHoras: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Considera_Tabela: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ISSCodigo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    AliqCofins: {
      type: "DOUBLE",
      allowNull: true
    },
    AliqPis: {
      type: "DOUBLE",
      allowNull: true
    },
    CSTCofins: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CSTPis: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CodCFOP: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ServicoAreceberterceiro: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    CodigoGrupo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DescricaoGrupo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AliqISS: {
      type: "DOUBLE",
      allowNull: true
    },
    DescontoMaximo: {
      type: "DOUBLE",
      allowNull: true
    },
    PadraoLocacao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    PadraoGarantia: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    TipoTempoGarantia: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    UnidadeMedida: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CNAE: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    DescricaoCNAE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    AliqISSServico: {
      type: "DOUBLE",
      allowNull: true
    },
    CodTribServico: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CompletaZero: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: '0'
    },
    AliqCofins_Presumido: {
      type: "DOUBLE",
      allowNull: true
    },
    AliqCofins_Real: {
      type: "DOUBLE",
      allowNull: true
    },
    AliqPis_Presumido: {
      type: "DOUBLE",
      allowNull: true
    },
    AliqPis_Real: {
      type: "DOUBLE",
      allowNull: true
    },
    CSTCofins_Presumido: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CSTCofins_Real: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CSTPis_Presumido: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CSTPis_Real: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    RecargaCelular: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CodigoAtividadeEconomica: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    AliqCSLL: {
      type: "DOUBLE",
      allowNull: true
    },
    RecargaOperadora: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Inativo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'servicos'
  });
};
