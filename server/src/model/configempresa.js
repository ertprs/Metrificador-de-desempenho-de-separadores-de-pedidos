/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('configempresa', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    BaixaAutomatico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    CodigoCX: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    EstornoAutomatico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    FaturaVendaDireto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImprimirDup_FinalizarVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    MostraEstoque_Geral: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ModuloProvedor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Margem_IMP_CLI_PROD: {
      type: "DOUBLE",
      allowNull: true
    },
    Margem_IMP_EntreBases: {
      type: "DOUBLE",
      allowNull: true
    },
    TempoAtuLibCred: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Email_Cob_Assunto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Email_Cob_Msg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ImprimirVenda_FinalizarVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CaminhoVenda: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    CaminhoCondicional: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    CaminhoDuplicata: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    CaminhoRecibo: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    CaminhoFechaCaixa: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    ImpRecEnt_FinalizarVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Dev_Ativa_Vale: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    IncluirDireto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CaminhoOS: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    SPC_ATIVO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SPC_Servidor: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    SPC_Prestadora: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SPC_Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    SPC_Senha: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    SPC_Porta: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    SPC_Padrao_PF: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SPC_Padrao_PJ: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SPC_TimeOut: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SPC_Automatico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SPC_Entidade: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    BaixaCentralizada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Dispara_Impressao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Operadora_Inclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    IndividualizarProduto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    NFE_Separada_ProdutoST: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    NFE_AtivaDesc_PrecoTab: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Ordem_impressao_Prod: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CaminhoOrcamento: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    TextoProcon: {
      type: DataTypes.STRING(110),
      allowNull: true
    },
    Imp_Direta_Comprovante: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    TipoImpressao: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CondicionalDireto: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    Tp_imp_Condicional: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OrcamentoDireto: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    Tp_imp_Orcamento: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OSDireto: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    Tp_imp_OS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FechaCaixaDireto: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    Tp_imp_Caixa: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ReciboDireto: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    TP_imp_recibo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DuplicataDireto: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    Tp_imp_Duplicata: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ImprimeVendaDireto: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    Tp_imp_Venda: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ListaCompra_UsaCxCompra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ListaCompra_ArredondarQtdeCx: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ModeloDuplicata: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ImpPromissoria_FinalizarVenda: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    ListaCompra_ListaTodosProdutos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Venda_ImprimeCupom: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CarneDireto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Tp_imp_carne: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CarnePorta: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    ListaCompra_LimpaFaltas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Entrada_Tributacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Ultima_Atu_Tab_Sped: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TextoNota1: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    NAO_LANCA_BONIF_COMO_DESC: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CTE_CalculaTonPesoBruto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PedidoCompra_UsaCxCompra: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ReciboPersonalizado: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Gerar_Parcela_Baixa: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ListaCompra_FornecedorPadrao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    SPC_TipoServico: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ListaCompra_ExibeColDetalhamento: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Nao_Calcula_ICMS_Bonificacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Vende_Sem_Estoque: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    UsarSocioRemessaSicredi: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Nao_Calcula_ICMS_BonificacaoTotal: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PedidoCompra_UsarArredondamentoCx: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    PedidoCompraApenasFornecedorPadrao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    PedidoCompraVerificaFornPedidoAberto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ImprimirContrato_FinalizarVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    SolicitarConfirmacaoDuplicata: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PermiteVariasTabelas: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    DescontoFinalLimiteDescMaximo: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    Caixa_EmitirNFCENFEVenda: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    ListaCompra_SugerirEstoqueIdeal: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CstPis01SN: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Processo_Judicial_001: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    FluxoCaixa_MaisDiasBoleto: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '0'
    },
    EmpresasProdutos: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ImpressaoQtdeViasVenda: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    ImpressaoQtdeViasOS: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    ImpressaoQtdeViasCondicional: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    ImpressaoQtdeViasOrcamento: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    ImpressaoQtdeViasDevolucaoVenda: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    ImpressaoQtdeViasDoacao: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    ImpressaoQtdeViasPreVendas: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    ImprimirBol_FinalizarVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CaminhoPreVenda: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    ImprimePreVendaDireto: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    Tp_imp_PreVenda: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Processo_Judicial_002: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ObservacoesCRT: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    GerarInfoResposavelTecnico: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    EnvCteQrCode: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    DiretorioFtpMobile: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ServidorFtpMobile: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SenhaFtpMobile: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    UsuarioFtpMobile: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ObservacaoVale: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ListaCompra_ComposicaoKit: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CalcularIcmsEstimativaSimplificada: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    IgnoraDestinatarioNFe: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'configempresa'
  });
};
