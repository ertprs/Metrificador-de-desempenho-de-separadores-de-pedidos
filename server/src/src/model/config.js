/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TaxaJuro: {
      type: "DOUBLE",
      allowNull: true
    },
    DiasJuro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IncluiDireto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ExigeCnpjCliente: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    PSugeridoCredito: {
      type: "DOUBLE",
      allowNull: true
    },
    ConsultaSCPC: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ConsultaSite: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ConsultaTecnologia: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ConsultaUsuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ConsultaSenha: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Arredondamento: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    UltimoBackup: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Userbackup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminalbackup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Localbackup: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    EspecificaEstoque: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    FormaParcelamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SomenteComPlaca: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImprimeVendaDireto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CaminhoImpVenda: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    BaseComissao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MostraCabecalho: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    TextoL1: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    TextoL2: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    TextoL3: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    TextoL4: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    TextoEcobrador: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NaoAlterarDocs: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    AlertaParcelas: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    AlertaParcQtde: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    AlertaMsg: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Transf_sem_estq: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DupPro: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Palm_Servidor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Palm_User: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Palm_Senha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Palm_Diretorio: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Palm_EnviaCOnfig: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    BuscaReferencia: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ConsultaSite_Porta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ConsultaSPCPadrao_PF: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ConsultaSPCPadrao_PJ: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Cor_Inativo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Cor_Cortado: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Cor_SCPC: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Cor_Incompleto: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ConsultaSCPC_TimeOut: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    MovEst_PreVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    AutenticaRecebimento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    PortaAutenticacao: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    SuprimirOS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Obriga_Fabricantes_CadPro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    MostraDica: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ExcluiComEstoque: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ConsultaSCPCVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DiasInativo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Obriga_Grupos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TipoAparelho: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    RecebeAssinatura_Palm: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ReciboSempre: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CondicionalDireto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CaminhoCondicional: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    ReciboDireto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CaminhoRecibo: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    EnviaPromocao_Palm: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ControleViagem: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Palm_CaminhoGerar: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    UsaFormacaoCusto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Palm_NvendasEnviar: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DetalharFuncOS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DevolucaoAvulsa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DiasAtu: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataVerificou_Atu: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PermiteAlterarVendOS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ControlaCreditoClientes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    OS_ComFuncionario: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ObsRecebimento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    AvisoDuplicata: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    FatorCalculoCartao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ConsideraJurosComissao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    AutoCompleteProd: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    AutoCompleteProdNum: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Obriga_Fornecedor_CadPro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Vende_Sem_Estoque: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Comissao_ConsideraPrazoMedio: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    MoedaAtualizaC: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DiasPesquisaOS: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DiasPesquisaVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CotacaoOnline_Dolar: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CotacaoOnline_Euro: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ImpDirPag: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    UsaCustoMedio_Estoque: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    AtuVenda_AcertoEst: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    TipoImpressao: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MarcaProd_Entregue: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Palm_CaminhoRetorno: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Palm_NotificaSMS: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    CaixaUsuario: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    No_Desc_Ref: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Permite_CPF_Duplicado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    ObservaEstorno: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    FormatoValor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FormatoQtde: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodBar_Reduz: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    CodBar_Reduz_Carac: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Codbar_Reduz_I: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodBar_Reduz_F: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    OcultarGrade: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    AvisoVendedor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    JurosComposto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DuplicataDireto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CaminhoDuplicata: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    VendaDescontoFinal: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    SolicitaBackup: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    SolicitaBackup_PastaSistema: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Controla_Modalidade_Prevenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImprimeCarne: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ConsultaEntidade: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Dias_CR_Credito: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Ordem_Inativo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Ordem_Incompleto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Ordem_CreditoCortado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Ordem_SCPC: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Ordem_BlackList: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    PComissaoAvulsa_Entrada: {
      type: "DOUBLE",
      allowNull: true
    },
    PComissaoAvulsaParcelas: {
      type: "DOUBLE",
      allowNull: true
    },
    Palm_EnviaCli_Cortado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DiretoColunas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FechaCaixaDireto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    FechaCaixaPorta: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    ReciboAgrupado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Mostra_TabPreco: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Verifica_Dev_Excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Recalcula_Oferta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Aceita_Venc_igual: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Tp_Dig_FormaVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TPLibCredito: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DesabilitaCodGrade: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Obrigar_Peso: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Obrigar_NCM: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    ObservaPagamento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Compra_Calc_DIF_ICMS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Compra_Calc_CustoOP: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ExigeObsTroca: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    UsaFlexPrevenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Per_pesq_Fat: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    DivideNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    AlertaPeso_Prevenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Obrigar_LinhaComissao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ExpandeTela_AcertoEst: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TpDataGeracaoSintegra: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DescontoLinha: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Aviso_Sem_Est: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    UsaCGN53: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    QtdeLinhaRodape: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Recalcula_Venda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    NCopiaDanfe: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    IgnoraDecimalZero: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Faturamento_NomeFantasia: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CopiaAgrupada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Avisa_MenorIdade: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Cor_Promocao: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Limite_COD_Vendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Aviso_Info_Financeiro: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Campo_Cartao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    NCopiasVendaDireta: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Avisa_prod_Rep: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ArquivoPedido: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Campo_AC_DE_Venda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    SPC_Automatico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Desconsidera_PrecoTabela: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DistribuidoraMedicamento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Limite_Desc_NF: {
      type: "DOUBLE",
      allowNull: true
    },
    HistFin_MesAntes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    HistFinSituacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    EtqCusto_Numerico: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    EtqVenda_numerico: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    TextoProcon: {
      type: DataTypes.STRING(110),
      allowNull: true
    },
    TextoNota1: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ImpVenda_AgrupaProd: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    AgrupaProdNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Mostra_DataContrato: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Orc_DesabilitaServico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ExibeEstoqueMultiLoja: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TP_imp_venda: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Tp_imp_Condicional: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Tp_imp_Duplicata: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Tp_imp_Recibo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Tp_imp_Caixa: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Impressora_Por_Sessao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ReciboDetalhado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ReciboCanhoto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MostraSimilares: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ExibeVendasAnteriores: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ExibeFotoCli: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Deduz_IcmsST_Prod: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    PAdicional: {
      type: "DOUBLE",
      allowNull: true
    },
    OSDireto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TP_Imp_OS: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CaminhoOS: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    CodVendedorSite: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PreVenda_Separado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TipoPessoaCadastro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Mostra_icmsST_Prevenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    VendeSemEstControlado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    CobrancaCarga: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ConsiderarVendaT1: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    AtivaNF2g: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Exibe2Vend: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    FaturarCarregamento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    FlexPreVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    VinculaTabCli: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    BloqModCob: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ObsPreVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    BaixaEstoquePreVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    AddFinanceiroProd: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Obriga_Nascimento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Obriga_Fone: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Obriga_Email: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    PercentualCPF: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorMinimoBoleto: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorMinimo_Troca_Modalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TelaLibCreditoModal: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Auto_EndEntrega: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    PermiteVendaPrazoConsumidor: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    AlertaPreVendas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    AbrirComSaldoTotal: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    MsgCondicional: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Obriga_ModCob: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    OSHoras: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Desabilita_Pre_CampoDesc: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Desabilita_Pre_CampoVolume: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Bloq_Valores_Orcamento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Exibir_Campo_Nped_Venda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    BoletoMinimo_Taxa: {
      type: "DOUBLE",
      allowNull: true
    },
    Vendas_ApenasComprovante: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    MargemLucroMinima: {
      type: "DOUBLE",
      allowNull: true
    },
    Msg_Imp_Direta1: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    Msg_Imp_Direta2: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    Msg_Imp_Direta3: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    Msg_Imp_Direta4: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    Msg_Imp_Direta5: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    Msg_Imp_Direta6: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    Transf_Cheque_Hab: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Transf_Cheque_ContaBanco: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ScpcBloqueado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Avisa_Devolucao_Vendedor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    MFNF: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    AmarraGrupos: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    BloqueiaCancelaNotaVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Aviso_Info_Financeiro_Prev: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Gerar_Financeiro_Pre: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Gera_ORC_Como: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Palm_Envia_QtdeCx: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Palm_Envia_Debitos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Dev_PermiteAberta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Palm_Envia_Subgrupo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Palm_Envia_BloqModalidade: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    CEPAutomatico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    SelecionaFunc_OS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Prevendas_PermiteCreditoCortado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    DiasPesquisaCondicional: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ModoDescDevolucao: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Obriga_FotoCliente: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    OS_Habilitar_UltimoObjetoUsado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Orc_VendaAgrupada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Baixa_Simples_ConsultaCR: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Email_Auto: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Email_Danfe: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Atualizando: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    OS_Funcionario_Produto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Aproveita_Credito_Icms_Bonificacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    BloqueioCondicional: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Produto_ClonarLote: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    NPontos_Cupom: {
      type: "DOUBLE",
      allowNull: true
    },
    OS_Placa_ApenasUma: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    PreVenda_Separar_SemPrevenda: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    CadPro_Desc: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Controle_Desc_Final_Venda: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Avisa_Prod_Cond_Anterior: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Desc_Final_Venda_Vista: {
      type: "DOUBLE",
      allowNull: true
    },
    Centro_Custo_Entrada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ControlaCreditoORC: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ControlaCreditoCond: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Palm_Versao: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Palm_Envia_TabelaPreco: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Palm_Envia_Positivacao_Cliente: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ModoDescOS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Venda_Rapida: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    TaxaMulta: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Tp_imp_Orcamento: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    OrcamentoDireto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CaminhoOrcamento: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    Transp_Padrao_Venda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NDias_Cadastro_Atu: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Bloq_Parc_Vencimento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ObsComprovanteOS1: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    ObsComprovanteOS2: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    ObsComprovanteOS3: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    DescCodVenDireta: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    MostraRecusaCredito: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    FaturaFilial: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    UFFilial: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CodEmpresaFilial: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Aviso_Info_Financeiro_Orc: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Vendas_DataBaseParc: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    DescontaST_Compra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    chkControladoriaCadastro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Carga_Vendas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ConsultaSPC_ExigirSenha: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Entrada_Atu_NCM: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    OrcamentoComEstoque: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    ListarNomeRuaCadastro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    TransferenciaDireta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TransferenciaPorta: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    Tp_Imp_Transferencia: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Pintar_Estoque: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Orcamento_TravaAcrescimo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Frete_Primeira_Parc: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Bloq_Entrada_VendaT1: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PermiteVariasTabelas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Corte_Editar_Prevenda: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    CodigoCargaVendaAuto: {
      type: "DOUBLE",
      allowNull: true
    },
    CargaVendaAuto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Palm_Envia_Config_NF: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    PDV_DescontoMaximo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '7'
    },
    Grava_Log_Cliente: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ObrigaContatoPreVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ObrigaContatoPreVenda_Contatos: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    FechamentoCegoCaixa: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    CodVendedorSite2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Banco_Altera_DataMov: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Banco_Altera_DataBanco: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Desabilita_Pre_CampoDataFat: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    chkImprimeDetalhes_Serv_OS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Email_Danfe_Transportadora: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Exibir_Perc_Desc_Impressao_Direta: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Ignora_Flex_Trocas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Palm_Envia_Prod_Lista: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Venda_rapida_PreVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Palm_Bloq_Forma_Modalidade: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Palm_Bloq_EdicaoPedido: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Muda_Venc_Rec_Parcial: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    VerbasVendedor_Fornecedor: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    OS_VariosObjetos: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Exibe_Est_Fisico_PRevenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Grava_Log_Produtos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Prevenda_Controla_Fin_Est_ListPreVendas: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    Producao_Auditar: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    Controla_Estoque_Fisico: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ImprimeFabricante: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ControlaCreditoOS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Markup_Produto: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '100.00'
    },
    Estoque_SeparacaoSemEstoque: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    PreVenda_Padrao_Entregue: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Venda_Padrao_Entregue: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    OS_Padrao_Entregue: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    CONDICIONAL_Padrao_Entregue: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    ORCAMENTO_Padrao_Entregue: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    DEVOLUCAO_Padrao_Entregue: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    DOACAO_Padrao_Entregue: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    PreVenda_Obriga_NumPed: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PreVenda_NaoDuplicidade_NumPed: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CarneDireto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Tp_imp_Carne: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CarnePorta: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    obsCarne1: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    obsCarne2: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    obsCarne3: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    Compra_IcmsST_CustoOP: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ExecutarSERVIPA: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DiasPesquisaOrcamento: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '30'
    },
    chkProdutosAcertoCusto: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    CalcularFlexPrecoPromocional: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    MudaContaCliente: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Verifica_NF_Excluir: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Tp_Presenca: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    VendaKitDesdobrado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    OrcamentoComEstoque_Bloq: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Separacao_QtdeDiverge: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Modalidade_AcertoCarga: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoVendedorFidelize: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PreVenda_Prod_TaxaFlex: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    GerenciamentoCortePadrao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ControleInternoHorasTecnico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    BloqueiaFaturamentoFone: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Nao_Cobra_IcmsST_Bonif: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Balanca_CasasDecimais: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '3'
    },
    AtualizaCustoKit: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    AtualizaVendaKit: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    AtualizaPromocaoKit: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Email_Danfe_CTE: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Email_auto_CTE: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Pintar_Estoque_Min: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    obsDup1: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    obsDup2: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    obsDup3: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    DescFunruralEntradas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    BloqVenda_CaixaFechado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CodigoPesavelNDigitos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Pin_Ceicom: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodCliente_Ceicom: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ApareceJuroReceita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    EditarLotesSaidas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ExportarPrevenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ExibeJurosCR: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    ExibeJurosCP: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    ParcelarImposto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    EstoqueMinimoIdealEmpresa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    VizualizaCustoLiquido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ExibeEstoqueReservado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    OS_STATUS_OBRIGATORIO: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Permitir_Minusculo_CadPro: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    BaixaComposicao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    QtdeDiasFechamentoParcela: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ModoCondensado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    TaxaCorrecao: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ExibeReservaMatProducao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ExibeAvisoFaltaMatProducao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    MultaComoJuros: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Palm_Flex_Valor_Desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    FinalizaOpEtapasConcluidas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    CodBar_DesativaRegra0: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PagRapido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Considerar_OuCustoCadPro: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    SugestaoProducaoConsideraQtdeCx: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    SugestaoProducaoApenasComComposicao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ConferenciaCegaComparativo: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    TipoServicoSPC: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    GerarNovaParcImposto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ExibirNumeroCopiaImpressao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    BloqueaEdicaoConsumidor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    OsColorirGridComStatus: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    MotivoSolicitaDesconto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Abate_Credito_Impostos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    InativarClienteRegistrandoCrm: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    RecRapido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    PrevisaoCadastro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Palm_Desconto_Max_CPF: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    AvisoChequeCompensarVencidos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ProducaoBaixaParcialAuditada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    EmailUsuarioResposta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Producao_QuantidadesPossiveisMateriaPrima: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ImpressaoDiretaDuasLinhas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    LiberacaoRemocaoItensVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CortesEstoqueReserva: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    BloqueaVisualizacaoEditar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    LiberacaoAlteraracaoVendRota: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    LiberacaAlteracaoVendRota: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ImpressaoDiretaUmaLinha: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Caixa_SaldoDisponivelPorCaixa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ReciboSemprePagar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CaixaTotalizarVendasAPrazoPorUsuario: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    TransferenciaAlertaEstoqueInsuficiente: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    PrevendaBloqueioVendaParcial: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    OrcamentoPreVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ProducaoPrevendaConsiderarQtdeEmAberto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    GerarNovaParcImposto_Vencimento: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: 'P'
    },
    SovisObrigaPreencherEmpresa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ValeCompraSemMovFinanceira: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    IndenizaTrocaAutomatico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    IndicacaoVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ComposicaoAtualizaValorVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    VendedorDiferente: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ControlaEntregaPrevista: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    UsaRecuperacaoICMS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    SeparacaoReservarQtdeSeparada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    AliqIcmsInicial_Produto: {
      type: "DOUBLE",
      allowNull: true
    },
    OrcamentoSolicitarComanda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ImpressaoDiretaExtratoValorOriginal: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    OpPrevendaListarApenasPedidosPendentes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ExigeSenhaCancelarVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CaixaAceitarTransferenciaAutomatico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Cte_PreencherInformacoesAdicionais: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ImpressaoDiretaExtratoAssinatura: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CancelarContasReceberNotaManual: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    DescontoFinalLimiteDescMaximo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ValidarDigValNFe: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ValorMinimoBoleto_msg: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Exibe3Vend: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    BoletoAtualizarValorPendente: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    CobrancaComissaoEscalonada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ProdutosAcertoDescricao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    LabelVendedorRelatorio: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: 'Vendedor:'
    },
    GravaUsuarioStatusOS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ImprimirPreVenda_FinalizarPreVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ControlaCreditoPRE: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    TextoPadraoEmailBoleto: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    MyCobradorModalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    mycobradornotificar: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    MyCobradorCobrarNovamente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    MyCobradorNome: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    myCobradorAssunto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MyCobradorAtivo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    DescontaChPre_CreditoCliente: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CMC7_nCCReduzido: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    UsaCustoMedio_ZeraBonificacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    AutoLancDescontoBoletos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ImpressaoDiretaExtratoSemJuros: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    UsaBiometriaClientes: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ComandaApenas1Orcamento: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    DiasTrocaFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ManterObsOriginalPrevenda: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    OrcamentoVendaParcial: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ImpressaoDiretaCabecalhoResumido: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ImpressaoDiretaReciboNaoJuros: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    VoltaCondicionalVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ImpressaoQtdeViasVenda: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    FretePorContaDestinatario: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CarregaEmailCadastrado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    obsCondicional: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Dir_Export_NFe: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PVexibeAnteriores: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    NaoExcluirVendacomPag: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ProdutosM2M3: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PermitePreSeparacaoPedGerado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    BloqueiaMotoristaCarregamento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CaixaSenhaAlterarJuros: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    EtqCusto_Numerico_UsaDigitos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    EtqCusto_Numerico_Inverter: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    EtqVenda_Numerico_UsaDigitos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    EtqVenda_Numerico_Inverter: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Nao_Permitir_OS_Consumidor: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Perc_Aumento_Entrada: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    crmpv_Registrar: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    crmpv_Minimo: {
      type: "DOUBLE",
      allowNull: true
    },
    crmpv_abrirtela: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    crmpv_atendimento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    crmpv_tpSolicitacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    crmpv_prioridade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    crmpv_departamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    crmpv_situacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    crmpv_dias: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    crmpv_hora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    crmpv_alertar: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Verifica_Boleto_Excluir: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Obrigar_CodigoBarras: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CHQCR_Ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    CHQCR_Modalidade: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CHQCR_CentralCobranca: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    CHQCR_ECobrador: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    OpPrevendaValidaMateriaPrima: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Obriga_CEPCliente: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Obriga_IECliente: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    BloqueiaEdicaoVendaBoleto: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    crmpv_MinimoOS: {
      type: "DOUBLE",
      allowNull: true
    },
    crmpv_RegistrarOS: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ExibirSegundaPesquisa: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    FaturarDevAmarrada: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ImpressaoDiretaDetalhaCartao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    IgnoraFatClienteResponsavel: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    TrazProdutoGradeTransferencia: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    IgnoraTabelaPrecoEdicao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    IndicacaoPreVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    GerarCRJurosCaixa: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    MostraEstoqueRedeAcertoEstoque: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ExibirVendasDevAvulsa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImprimirComprovanteOrcamento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    DiasDesconto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TaxaDesconto: {
      type: "DOUBLE",
      allowNull: true
    },
    QuantidadePadraoVenda: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    ConferenciaCegaVerificaNota: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    NDias_Credito_Atu: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NFe_Contabilidade_GeraXMLAutCanc: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Ind_Rent_Prevenda: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Ind_Rent_Venda: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Ind_Rent_OS: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Ind_Rent_Condicional: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Ind_Rent_Orcamento: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Dev_MovimentaEstComposicao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Obriga_RotaCliente: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    NFe_Contabilidade_SepararPastas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Prod_ExibeDadosTecnicos: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Grava_Log_Cst_PIS_Entradas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    CaixaCCNaoSelecionar: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    AliquotaFundoCapital: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    AliquotaFunRural: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '2.10'
    },
    AliquotaSenar: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.20'
    },
    CaixaDiretoListaAPrazo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    GavetaAbreFinalizarVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    GavetaSenhaSupervisor: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Abate_Credito_Impostos_Ignorex60: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Entrada_NoPermiteCstDifRegime: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    OcultarKitsGradeImpPreVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    SomenteComPlacaGravada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TpDataGeracaoSintegra_EntNFSe: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: 'E'
    },
    NFeImportacaoCodFabrica: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    NFSeVariosServicos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    IntegracaoPandolfiAtiva: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Caixa_EmitirNFCENFEVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CaixaDescontoTipo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    AtivarClienteResp_ST: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ExibirObraOS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    BialParam: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ImpressaoDiretaExtratoJurosDesconto: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    CaixaVendaEntradaAPrazo: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    ImpressaoDiretaReciboProdutos: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    EntradaCarregaParcelamentoForn: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Email_Boleto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    UsaDataCompetencia: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Campo_AC_Venda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ProdutoHistoricoExibirVendasExcluidas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    OSBaixarAdiantamento: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    CaixaVendedorBaixa: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    ExibirEstoqueKit: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CodBar_Bal_Extrair: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    CodBar_Bal_Extrair_Digitos: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '4'
    },
    cboCLientePadraoNFCe: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    ImpressaoDiretaCelular: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ProdutosInformacaoNutricional: {
      type: DataTypes.INTEGER(3).UNSIGNED.ZEROFILL,
      allowNull: true,
      defaultValue: '000'
    },
    BaixaLoteMaisVelhoAutomaticamente: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CaixaNaoExibirValesRecebimento: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    DevolucaoForcaVendas: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    BloqueiaVendaClienteInativo: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    MsgValorLiqVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    obsDevolucao: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    CaixaCPFornecedorUnico: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    HabilitaStatusOP: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    FormatContaContabil: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: '#.##.##.##'
    },
    Entrada_BloquearDivergencia: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Entrada_PriorizarDiferencaPreco: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Entrada_ValidarQuantidadeMaior: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    IndicacaoOrcamento: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    PermaneceValorOriginalContrato: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Banco_BaixaTarifaExtra: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ConfirmacaoFaturamentoTerceiros: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    DescontoRecebimentoVariado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    SenhaDescontoDesdobramentoPagamento: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    TrocasBaixarEstoqueNFE: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ChequesFrioContaPartida: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    VendaAmbulanteAtiva: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    VendaAmbulanteAtivo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    FormatContaContabilRFB: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: '#.##.##.##'
    },
    ExibePrevendasAnteriores: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ExtratoImprimirAnotacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Kit_AtualizaValorVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    VendeSemEstEntFutura: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    FaturaTextoColecao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ImpressaoDiretaExtratoDetalhaProduto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    UltimoDiaMesFechamentoParcela: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    VisualizaMargemBruta: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    DesdobraProdutosDuplicatas: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ListagemProdutos_PromocaoNoTopo: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    PreVenda_IncluiControleSerial: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    OrcamentoColorirGridComStatus: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ObrigaObsPrimeiraOrcamento: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ImprimiQtdUnitariaKG: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ImpressaoQtdeViasOS: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    ImpressaoQtdeViasCondicional: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    ImpressaoQtdeViasOrcamento: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    ImpressaoQtdeViasDevolucaoVenda: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    ImpressaoQtdeViasDoacao: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    IgnoreCorteUnVendaSovis: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Calcular_Comissao_Bonificacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ValorMinimoSangriaPDV: {
      type: "DOUBLE",
      allowNull: true
    },
    Dir_Export_NFce: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AtualizaStatusFinListagemPrevenda: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    GerarNovaParcFrete_Vencimento: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ParcelarFrete: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    GerarNovaParcFrete: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    BloqueiaUsuarioBaixaContaPropria: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    IbasiShopp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    AuditarProdControladoVencido: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    OS_STATUS_OBRIGATORIO_FINALIZAR: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ExigeSenhaMudarVendedorVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Orcamento_SomenteComPlaca_Gravado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Orcamento_StatusObrigatorio_Gravado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Obriga_RamoAtividade: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Obriga_Vendedor: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ValorCreditoPadraoCliente: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    DesMaximoInicialProdutos: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '100'
    },
    ItensImportacaoEntrada: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Código'
    },
    ControlarVeiculoEntrada: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    VendasAutorizacaoAutomaticaBoleto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ParcelarOutrasDesp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    GerarNovaParcOutrasDesp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    GerarNovaParcOutrasDesp_Vencimento: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SaiReferenciaVendaOS: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    SaiReferenciaOrcamento: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    ABCUrl: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: 'https://webserviceabcfarma.org.br/webservice/'
    },
    ABCLogin: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ABCSenha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    HistoricoDesconsiderarDevolucaoCondicional: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ExibeInformacoesServicoJaAdquiridos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ShowRoomTamanhoImagem: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    NFEEnviarPLacaObs: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    FormaParcelamentoPadraoImportacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ExibeTotalOSaberta: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    AnaliseCompraExibirGradeMesmaLinha: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    Abate_Bonificacao_Comissao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PermiteAlterarBaseComissao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Entrada_ImportacaoPreencherCodFabrica: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    VendaNaoExibirAlertaVencimento: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    DevolucaoEstoqueFinalizar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    SeparacaoBuscaIdentificadorLote: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    VincularSimilaresExibicao: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    NDias_Cadastro_Atu_Caixa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NDias_Cadastro_Atu_VendaBalcao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NDias_Cadastro_Atu_Condicional: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TrocasBaixarEstoque: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    ExibirAlertaContaMaisAntiga: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    ImpressaoDiretaImprimeLimiteCredito: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    NotificaManterNCMEntradas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    ReciboSempreAdiantamento: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    DiasPesquisaOSAbertas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DiasPesquisaOSFinalizadas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SaiGradeVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    PedidoCompraLancaGrade: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ProdutoKGObrigaVolume: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    DeixaFixoValorEmbalagem: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PrevendaDireto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CaminhoPreVenda: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    Tp_imp_preVenda: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SeparacaoParcialProdutoLote: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PermiteAliqDifalMenor: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    HabilitaConferenciaVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    VarejoMenorCusto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    BloqExcluiVenda_CaixaFechado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ExibeCondicionaisAbertaCaixa: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    UnificaBaixaCartaoUmRegistro: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CaixaBloquearValorFinal: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ArqRetBol_DataBaixaBanco: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Obriga_CNPJCPF: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Obriga_ModCobranca: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Obriga_IERG: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Obriga_EmailVendedor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Obriga_Orgao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Obriga_Foto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Obriga_CEP: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Obriga_RotaVend: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Obriga_DataNascimento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Obriga_DataAdmissao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Obriga_Telefone: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Obriga_VendedorCadVend: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    AutoManifestarNFe: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    HistoricoLegendaCartao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PDVExibirPrecoTabIndividual: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    AumentoAnualModalidade: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    mm_ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mm_moeda_padrao: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: 'Real'
    },
    mm_moeda_simbolo: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: 'R$'
    },
    AplicarDescontoContasPagar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ControlaCredito_FormaAprazo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    NovaFormaLancNFeImport: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    DiasPesquisaOSFechadas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NFe_PreencherInformacoesAdicionais: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ImprimirOrdemEntrega: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    NFeConcatenar_Desc_Ref: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    NFeICMSST_RS_X60: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    BloquearFlexNegativo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    MyEnviaPDFboleto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    OSHoras_PermiteMaisFuncionariosComTotal: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    MovEstViagem: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Obriga_Numero: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PDVLibVenPrazoBiometria: {
      type: DataTypes.INTEGER(1).UNSIGNED.ZEROFILL,
      allowNull: true,
      defaultValue: '0'
    },
    AdiantamentoCP: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    AdiantamentoCPHistorico: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Bloqueia_Edicao_Consumidor_Orc: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Entrada_GetDadosUltimoLancamento: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PermitePerdaEstoqueInsuficiente: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Prevenda_SeparadoKG: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImpressaoPromissoriaDireta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Carrega_UltimoObjeto_Orc: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    QtdeVolumesSeparacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ImprimirColetaPedidoAuditado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ModoAcrescOS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BloqSeparacaoVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    TextoPadraoBonificacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    TextoPadraoBonifica: {
      type: DataTypes.STRING(170),
      allowNull: true
    },
    IsentaIcmsSTIndust: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Considerar_CustoNotaeOPEmpresa: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Estoque_PreSeparacaoSemEstoque: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    DiasPesqPreVendaParcGerada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DiasPesqPreVendaNaoGerada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DiasPesqPreVendaParcNaoGerada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DiasPesqDevolucaoAberta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DiasPesquisaEntradas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '30'
    },
    FocoClienteVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ObrigaPreenchimentoDataEntrega: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    SolicitaLiberacaoAcrescimo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Flex_PorEmpresa: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    OpPresencial_FatOpInterna: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    GestaoPromocoes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    BloquearMargemLucro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    AlterarClienteDevolucao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    NFCeSelecionarImpressaoEimpressora: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DataEntradaImportacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ArquivoOS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    SenhaFinalizaCrediario: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ConsiderarJurosNegativos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    KitDesdobradoVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    KitDesdobradoOS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    KitDesdobradoOrcamento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    KitDesdobradoDoacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    KitDesdobradoPreVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    MotivoDescontoExceda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    PreVenda_NaoDuplicidade_NumPed_Cliente: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    MyCobradorNotificarAntes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    TextoLembreteEcobrador: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CriarRenegociacaoValorRestante: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CodigoVendedorPharmalink: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoVendedorMerck: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SelfColor_Servidor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SelfColor_Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SelfColor_Senha: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SelfColor_Banco: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    SelfColor_UltimaImportacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SelfColor_TerminalImportando: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ImprimirEtiquetaVEnda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    AlterarAutomaticamenteVencimento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ImpressaoEtqProdSelecionados: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ImprimirOS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ImprimirCarneOS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    BloquearAlteracaoClientevenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ComissaoIndireta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    PerComissaoIndireta: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValidaVctoTelaVendas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    ValidaVctoTelaOS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ValidaVctoTelaNF: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ValidaVctoTelaCR: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ValidaVctoTelaCP: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    BloquearFlexNegativoConsiderandoSaldo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    GerarVendaSeparacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    RegraBS_FatBon1Cent: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Obriga_Telefone_Consumidor_Orc: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ConferenciaCegaBaixaEstoque: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ABCTipoImportacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    BloquearAcertoEstoque: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    DescontoFinalIgualmente: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    DescontoClientePrevalecer: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    NotificarAniversarioPDV: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    imprimirEtiquetaOS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ValidaVctoTelaRenegCR: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Cor_Tempo1: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: '16711680'
    },
    Cor_Tempo2: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: '-2147483635'
    },
    Ordem_Tempo1: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Ordem_Tempo2: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    NaoCompraADias1: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '60'
    },
    NaoCompraADias2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '120'
    },
    UtilizaPrismaOS: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    QtdePrisma: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DescontaISSParcela: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Pontuacao_FormaRecebimento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    PontoPorReais: {
      type: "DOUBLE",
      allowNull: true
    },
    DescontoPorPonto: {
      type: "DOUBLE",
      allowNull: true
    },
    Pontuacao_ValidadeMeses: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CFG_QTDE_EMBALAGENS_GRATUITAS: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    Orcamento_NotificaPendente: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Orcamento_Notificar_Horas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    PermissaoMySMS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CHQ_EmMaos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'config'
  });
};
