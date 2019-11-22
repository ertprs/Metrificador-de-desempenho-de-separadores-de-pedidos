/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendasprodutos', {
    CodigoVenda: {
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
      type: "DOUBLE(13,2)",
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
    QuantDevolvida: {
      type: "DOUBLE",
      allowNull: true
    },
    SequenciaDevolucao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NotaFiscal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    QtdeAFaturar: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    QtdeFaturada: {
      type: "DOUBLE UNSIGNED",
      allowNull: true,
      defaultValue: '0'
    },
    Pcomissao: {
      type: "DOUBLE",
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
    VlrUntFat: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoGrade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    VolumeItem: {
      type: "DOUBLE",
      allowNull: true
    },
    SeqItemPedProd: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IndiceItem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ImportUser: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ImportTerminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ImportStatus: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MarcadoEntregue: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PrecoemPromocao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    BaixaComposicao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    SeqItemCondicional: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeUND: {
      type: "DOUBLE",
      allowNull: true
    },
    MarcoEtq: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    NReceituario: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Pontuacao: {
      type: "DOUBLE",
      allowNull: true
    },
    Bonificacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    VVendaT1: {
      type: "DOUBLE",
      allowNull: true
    },
    Volume: {
      type: "DOUBLE",
      allowNull: true
    },
    PosicaoCarga: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Alt: {
      type: "DOUBLE",
      allowNull: true
    },
    Comp: {
      type: "DOUBLE",
      allowNull: true
    },
    Larg: {
      type: "DOUBLE",
      allowNull: true
    },
    CodVendedorEntrega: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqOrdemCompra: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NOrdemCompra: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TipoOP: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: 'V'
    },
    Obj: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    PrecoCadPro: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    QtdeConferida: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    IDTabela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FidelidadePontos: {
      type: "DOUBLE",
      allowNull: true
    },
    FidelidadeDesconto: {
      type: "DOUBLE",
      allowNull: true
    },
    FidelidadeDescontoValor: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoObjeto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    MotivoCancelamentoItem: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoMotivoCancelamentoItem: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MotivoExclusao: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UsuarioExclusao: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    TerminalExclusao: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DataExclusao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraExclusao: {
      type: DataTypes.TIME,
      allowNull: true
    },
    ValorDescBonificacao: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    EstoqueNaoBaixado: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    ConsideraPrecoTab_Calc_ST: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ValorIPI: {
      type: "DOUBLE",
      allowNull: true
    },
    pIPI: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorBaseST: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorIcms_ST: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorBaseIcms: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorIcms: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseST: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorPis: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCofins: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    pPIS: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    pCOFINS: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    ST_TipoProd: {
      type: DataTypes.STRING(35),
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
    ST_MVa: {
      type: "DOUBLE",
      allowNull: true
    },
    ST_TipoMed: {
      type: "DOUBLE",
      allowNull: true
    },
    ST_PrecoMaxCons: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalValorPauta: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseIcms: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '100.00'
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
    vdi_uuid_pdv: {
      type: "BINARY(16)",
      allowNull: true
    },
    SelfColor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    PrevisaoEntrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'vendasprodutos'
  });
};
