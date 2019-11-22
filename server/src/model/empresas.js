/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empresas', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    NomeFantasia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    IE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    InscricaoMunicipal: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(10),
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
    UF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Telefone1: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Telefone2: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Telefax: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    WebSite: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    DataCadastro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Complemento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NomeR1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NomeR2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NomeR3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NomeR4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CPFR1: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    CPFR2: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    CPFR3: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    CPFR4: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    RGR1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RGR2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RGR3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RGR4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TelefoneR1: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    TelefoneR2: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    TelefoneR3: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    TelefoneR4: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Stat: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: 'a'
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    RegimeFiscalSimples: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    DestacaIPI: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    AliquotaISS: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    CodigoMensal: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CodigoCidadeIbge: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Int_Est: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    PFunRural: {
      type: "DOUBLE",
      allowNull: true
    },
    IDLiberacaoNFe: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Int_Comissao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CRT: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    ResponsavelTecnico: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CRF: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    AutorizacaoFuncionamento: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LicencaFuncionamento: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    AutorizacaoEspecial: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Int_BaixaCRP: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Int_ContasaReceber: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    LimiteConexao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    LicencaFuncionamentoSis2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TipoLucro: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Ativo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    UTCTime: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SintegraUnificado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CustoOP: {
      type: "DOUBLE",
      allowNull: true
    },
    CancelarNFe_ViaEnvento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Regra_Fiscal_Secur: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Int_Boleto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PercentualCPF: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    CodigoCargaVendaAuto: {
      type: "DOUBLE",
      allowNull: true
    },
    CargaVendaAuto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Codigo_RNTRC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Tipo_RNTRC: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Reg_Cartorio: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    IDLiberacaoCTE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IdLiberacaoPet: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RegFisParaSimples: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    FechamentoCegoCaixa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TpEmitenteMDFe: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    ControleMedico: {
      type: DataTypes.INTEGER(3).UNSIGNED,
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
    Int_ContaCorrente: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CodigoTributacaoMunicipio: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Biometria: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    ContadorRecibo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ContadorReciboB: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UltimoAcesso: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IDLIBERACAOLOC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DATAVERIFICACAOLOC: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Apelido: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    IdLiberacaoNFSe: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RegimeEspecialTributacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoIMS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    optSnExtra: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TitleColor1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TitleColor2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TitleFontColor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    AnexoSN: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Int_BaixaP: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    UltimaAlteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    TipoEmpresa: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    RUC: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CodigoPais: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Pais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoDepartamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Departamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoDistrito: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Distrito: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CIR1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CIR2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CIR3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CIR4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NumeroCertificadoCRT: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    UltimaSequenciaCRT: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    UltimaSequenciaMIC: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    Int_ContasaPagar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    MensagemPromocional: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    RespTec_CNPJ: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    RespTec_Contato: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RespTec_Email: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    RespTec_Fone: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    RespTec_idCSRT: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    RespTec_CSRT: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    IVA: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    biometriaLogin: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Int_ValeCompra: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    TipoLeitor: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'empresas'
  });
};
