/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidosvendaprodutos', {
    CodigoPedido: {
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
    QtdeGerada: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
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
      type: "DOUBLE(11,2)",
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
    CodigoGrade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    VolumeItem: {
      type: "DOUBLE",
      allowNull: true
    },
    MarcadoOP: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NProd: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    BaixadoProd: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeConferida: {
      type: "DOUBLE",
      allowNull: true
    },
    PrecoEmPromocao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    AjusteComFIxa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    MarcoEtq: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Despachado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CodDespacho: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Pontuacao: {
      type: "DOUBLE",
      allowNull: true
    },
    M3: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoCarregamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorIcms_ST: {
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
    Est_Baixado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
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
    CodigoCondicaoItem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PosicaoCarga: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Volume: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeUnd: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorIPI: {
      type: "DOUBLE",
      allowNull: true
    },
    Alt: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    Larg: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    Comp: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    SeqOrdemCompra: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NOrdemCompra: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MarcadoEntregue: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    DataLancamentoItem: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TipoOP: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: 'V'
    },
    BaseST: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '100'
    },
    EmpEstoque: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    OrdemDespacho: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PrecoCadPro: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    IDTabela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeParcialProducao: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    SeqProdOrcamento: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    EmProducao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    imp_server_SeqProd: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ValorDescBonificacao: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    ValorBaseIcms: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    ValorIcms: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    ValorBaseST: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    ValorPis: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    ValorCofins: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    pPis: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    pCofins: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    pIPI: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    ConsideraPrecoTab_Calc_ST: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    PICMS: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    BaseIcms: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    ValorNegociadoFutura: {
      type: "DOUBLE",
      allowNull: true
    },
    ImpostoFutura: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    AcrescMaximo: {
      type: "DOUBLE",
      allowNull: true
    },
    PrevisaoEntrega: {
      type: DataTypes.DATEONLY,
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
    UsuarioExclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'pedidosvendaprodutos'
  });
};
