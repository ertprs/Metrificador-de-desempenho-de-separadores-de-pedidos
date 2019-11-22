/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orcamentosprodutos', {
    CodigoOrcamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoBarras: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Referencia: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    UNVenda: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTabela: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorUnitario: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    Desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    Acrescimo: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoComissao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoSecao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoGrupo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoSubGrupo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoFabricante: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PesoBruto: {
      type: "DOUBLE",
      allowNull: true
    },
    PesoLiquido: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCusto: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCustoGerencial: {
      type: "DOUBLE",
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TextoObservacao: {
      type: DataTypes.STRING(170),
      allowNull: true
    },
    ValorComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cancelada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    FuncLiberou: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UserLiberou: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataLiberou: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DescMaximo: {
      type: "DOUBLE",
      allowNull: true
    },
    PComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoGrade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PrecoemPromocao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    QtdeUND: {
      type: "DOUBLE",
      allowNull: true
    },
    MarcadoEntregue: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    PrecoCadPro: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    QtdeParcialVenda: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeOriginalOrc: {
      type: "DOUBLE",
      allowNull: true
    },
    UsuarioUltimaAlteracao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TerminalUltimaAlteracao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pIPI: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    ValorIPI: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    ValorAdicional: {
      type: "DOUBLE",
      allowNull: true
    },
    DataHoraLancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ImpressoComanda: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ValorBaseIcms: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    ValorIcms: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    ValorIcms_ST: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseST: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorBaseST: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    ST_PInterno: {
      type: "DOUBLE",
      allowNull: true
    },
    ST_PExterno: {
      type: "DOUBLE",
      allowNull: true
    },
    ST_Mva: {
      type: "DOUBLE",
      allowNull: true
    },
    ST_TipoProd: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    ST_PrecoMaxCons: {
      type: "DOUBLE",
      allowNull: true
    },
    ST_TipoMed: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalValorPauta: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    AcrescMaximo: {
      type: "DOUBLE",
      allowNull: true
    },
    pp_sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pp_perc_bonus: {
      type: "DOUBLE",
      allowNull: true
    },
    pp_bonus: {
      type: "DOUBLE",
      allowNull: true
    },
    pp_TipoPromo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    SelfColor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'orcamentosprodutos'
  });
};
