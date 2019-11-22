/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkconfig', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    InFaturamento: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    InFaturamentoDias: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    FPagMuda: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    FPagValor: {
      type: "DOUBLE(11,3)",
      allowNull: true,
      defaultValue: '0.000'
    },
    FPagIdModalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FPagNomeModalidade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DivIdModalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    DivNomeModalidade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DivValor: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    Dividir: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    FPadraoModalidade: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    FPadraoModalidadeId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FPadraoModalidadeNome: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EmailMensagem: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: ' '
    },
    EmailEmpresa: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    EmailCNPJ: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    AgendaExecutar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    AgendaDia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    AgendaUltimaExecucao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DebitoCobrar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    DebitoPreOcorrencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PortaImpressao: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    NFEServidor: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NFEBanco: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NFEUsuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NFEPorta: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    NFESenha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NFEConexaoPadrao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    NFEBaseDoCalculo: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    DivTrans: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    NotDivModalidade: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CadCPF: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    EmailFax: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    EmailFone: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    QualidadeCadastro: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    QualidadeMes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    VlrPgQualidade: {
      type: "DOUBLE(11,4)",
      allowNull: false,
      defaultValue: '0.0000'
    },
    Chk_Funrural: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Int_Pre_Funrural: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NFBaseQtd: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    MovEstoquePlat: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    chkAtualizar: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    chkUsarParametrosQualidade: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    chkArredondar: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    cbPlanoFaturamento: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cbPlanoChequeAvulso: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    GeoLocalizador: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: '0'
    },
    Frete_Vlr_Kilometro: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    Frete_Salva_Vlr: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    chkFreteNaNFE: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    chkCadastrarDuplicadoCPFCNPJ: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    cbPlanoTransportadores: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    AlertaGeracaoFrete: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    chkConrtaCheque_CondicaoPagamento: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    chkContraChequeFunRural: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    ContraCheque_MSGGeral: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    idPre_LeiteAcido: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    chkContraChequeMostraValorExtenso: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    chkAss_TipoPGM: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    chkFaturaPeriodo: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    cbPlanoAssociacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DivOcorrencia: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '0'
    },
    chkCfopSelecionado: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '0'
    },
    chkDescontaVenda: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '0'
    },
    CodigoForma: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DescricaoForma: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoCaixa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DescricaoCaixa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    chkIncentivoNaNFE: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    chkAtualizaCustoProduto: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    CstPis: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    CstCofins: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    AliqPis: {
      type: "DOUBLE",
      allowNull: true
    },
    AliqCofins: {
      type: "DOUBLE",
      allowNull: true
    },
    ExibirRastreabilidadeInicio: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    chkObrigaReferenciarNota: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    chkFunRuralMesMovimentacao: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    chkDataPagamentoTela: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    chkNaoGerarObs: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    chkFaturaTransportadorZerado: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    chkExibeProdutorZerado: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    HistoricoSeisMeses: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    chkNumeroNotaConta: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    PadraoFunRural: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'milkconfig'
  });
};
