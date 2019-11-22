/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataCadastro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NomeFantasia: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    IE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CPF: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    RG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DataNascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Bairro: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Complemento: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    WebSite: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Telefone1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Telefone2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Ent_Endereco: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Ent_Numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Ent_Bairro: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Ent_Cidade: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Ent_CEP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Ent_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Ent_Complemento: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Ent_Email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Ent_Website: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Ent_Telefone1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Ent_Telefone2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Ent_Fax: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Profissao: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    EmpresaTrabalha: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    EmpresaTelefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EmpresaSalario: {
      type: "DOUBLE",
      allowNull: true
    },
    EmpresaTempoServico: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NomePai: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NomeMae: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EstadoCivil: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Residencia: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ValorAluguel: {
      type: "DOUBLE",
      allowNull: true
    },
    TempoResidencia: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ConjugeNome: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ConjugeDataNascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ConjugeCPF: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    ConjugeRG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ConjugeProfissao: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ConjugeEmpresaTrabalha: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ConjugeEmpresaTelefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ConjugeSalario: {
      type: "DOUBLE",
      allowNull: true
    },
    ConjugeTempoServico: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ConjugeSCPCNegativo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ConjugeOBS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ReferenciaNome1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ReferenciaNome2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ReferenciaNome3: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ReferenciaNome4: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ReferenciaNome5: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ReferenciaContato1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ReferenciaContato2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ReferenciaContato3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ReferenciaContato4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ReferenciaContato5: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ReferenciaFone1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ReferenciaFone2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ReferenciaFone3: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ReferenciaFone4: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ReferenciaFone5: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ReferenciaResultado1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ReferenciaResultado2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ReferenciaResultado3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ReferenciaResultado4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ReferenciaResultado5: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ValorCredito: {
      type: "DOUBLE",
      allowNull: true
    },
    CreditoCortado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    SCPCNegativo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    OBSERVACAO: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Stat: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FisicaJuridica: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ComissaoVendaProdutos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ComissaoServicos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ComissaoDiferenciadapor: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ComissaoPercentualProdutos: {
      type: "DOUBLE",
      allowNull: true
    },
    ComissaoPercentualServicos: {
      type: "DOUBLE",
      allowNull: true
    },
    Ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Vendedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoRamoAtividade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RamoAtividade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    SalarioOutros: {
      type: "DOUBLE",
      allowNull: true
    },
    DataFundacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    RegistroJunta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CapitalSocial: {
      type: "DOUBLE",
      allowNull: true
    },
    VendasMensal: {
      type: "DOUBLE",
      allowNull: true
    },
    Socio1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Socio2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Socio3: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Socio4: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CpfSocio1: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    CpfSocio2: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    CpfSocio3: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    CpfSocio4: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    RgSocio1: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    RgSocio2: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    RgSocio3: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    RgSocio4: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    DataSpcSocio1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataSpcSocio2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataSpcSocio3: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataSpcSocio4: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataNascSocio1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataNascSocio2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataNascSocio3: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataNascSocio4: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Naturalidade: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Rota: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NomeRota: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ClienteNotaFiscal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ManequimVestuario: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ManequimCalcado: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ConjugeManequimVestuario: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ConjugeManequimCalcado: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DataAlteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    DataAdimissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    EmpresaCadastro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Credito: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    UserID: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDFormaParcelamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UserExclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Serasa: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoCidadeIbge: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Contato: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SequenciaEntrega: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SequenciaVisita: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FoneContato: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EmailContato: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IEPronaf: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CodResponsavel: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DistanciaKM: {
      type: "DOUBLE",
      allowNull: true
    },
    Conta_Banco1: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Conta_Agencia1: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Conta_Conta1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Conta_Titular1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Conta_Banco2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Conta_Agencia2: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Conta_Conta2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Conta_Titular2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Conta_nomeBanco1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Conta_NomeBanco2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Conta_CPF1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Conta_CPF2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Bandeira_Cartao: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Descricao_Cartao: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NEstabelecimento: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Ent_CodIbge: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    MostraOBS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    BlackList_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    BlackList_Descricao: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    BlackList_Cor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TerminalExclusao: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MotivoExclusao: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DataHoraExclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NumeroCartao: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    SenhaVendedor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CodPais: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomePais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ExigeRequisicao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    SiteSenha: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OptanteSimples: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Visita_DOM: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Visita_SEG: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Visita_TER: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Visita_QUA: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Visita_QUI: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Visita_SEX: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Visita_SAB: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ConsFinal: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    IDModalidadeCb: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    EnviadoSerasa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CodRegiao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodSupervisor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Malote: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    DataDemissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodVend2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomVend2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MetaVenda: {
      type: "DOUBLE",
      allowNull: true
    },
    formapag: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TpVendedor: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Ent_CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ENT_IE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    comprador: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    emailcomprador: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    telefonecomprador: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dtnasccomprador: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    codcomprador: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MyMilk: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    IE_Suframa: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    PercentualDiferenciado: {
      type: "DOUBLE",
      allowNull: true
    },
    CNAE: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    IDTabelaPreco: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UF_RG: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Mymobile_Empresa: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Centralizador_CR: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Operadora: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    RG_RURAL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SCPCNegativo_Empresa: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    Serasa_Empresa: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    myMobile_Sistema: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    myMobile_Versao: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    StatusControladoria: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Latitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Longitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Func_Setor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Desconto_Padrao: {
      type: "DOUBLE",
      allowNull: true
    },
    SemanaVisita: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NIRF: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NRP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    RegistroProfissional: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Protesto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ComoConheceu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EmailCTE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    EmailNFE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    EmailFinanceiro: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    NomeTabelaPreco: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PeriodoVisita: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Trans_Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Trans_Placa_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Trans_Antt: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Trans_Motorista: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Trans_Telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Comissao_Preco_CadPro: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Contribuinte_Icms: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    IssRetido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    TipoRenda: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ComissaoPercentualLocacao: {
      type: "DOUBLE",
      allowNull: true
    },
    DiaFixoPagamento: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    NumIncra: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Ent_NumIncra: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    InscricaoMunicipal: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CodigoGrupo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    EmpresaExclusao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ContaSalario_Banco: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ContaSalario_NomeBanco: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ContaSalario_Agencia: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ContaSalario_Conta: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DataSenha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodVend3: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomVend3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodTransportadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeTransportadora: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TpCobrancaFunRural: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '2'
    },
    ComissaoPercentualValeCompra: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Biometria_TextFIR: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    FarmaciaPopular: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Palete: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    MostraObsCRM: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ComissaoPercentualSupervisor: {
      type: "DOUBLE",
      allowNull: true
    },
    Zona: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Secao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CertidaoMilitar: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Pis: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Escolaridade: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Orgao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MostraObsPedidosCompra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CTPS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SerieCTPS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UFCTPS: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    SerieCertidaoMilitar: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TituloEleitoral: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TomadorTributado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    DataAlteracaoCredito: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Comissao_Preco_Tabela: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CobrarFundoCapital: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CLI_FTI_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ResposavelICMSST: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ValorCreditoAnterior: {
      type: "DOUBLE",
      allowNull: true
    },
    UsuarioAlterouCredito: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MostraObsRecebimento: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    FaturaProdutorVinculadoZerado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    VencimentoDocumentoControlado: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ObservacaoDocumentoControlado: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ExibeFornecedorMyAcougue: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    EmiteNFe: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    Sexo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EmailSocio1: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    EmailSocio2: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    EmailSocio3: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    EmailSocio4: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    SexoSocio1: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SexoSocio2: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SexoSocio3: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SexoSocio4: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    AumentaNFSeRetido: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    ContaSalario_AgenciaDV: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ContaSalario_ContaDV: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    IcmsST_PF: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    CodigoDepartamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoDistrito: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    Comissao_Vendas_PDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CodPaisCadastro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DocumentoEstrangeiro: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CodPaisNacionalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UltimaCompra: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    SenhaCrediarioCliente: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NaoConsideraTaxaBoleto: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    EnviaRequisicaoNF: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    FornecedorPadraoMyAcougue: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'clientes'
  });
};
