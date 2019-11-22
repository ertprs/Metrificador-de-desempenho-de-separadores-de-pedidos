/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('viewteste', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
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
      type: DataTypes.STRING(18),
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
      type: DataTypes.STRING(50),
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
      type: DataTypes.STRING(35),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Complemento: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(50),
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
    Observacao: {
      type: DataTypes.STRING(400),
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
      type: DataTypes.STRING(1),
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
      type: "DOUBLE(11,2)",
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
      type: DataTypes.STRING(20),
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
    }
  }, {
    tableName: 'viewteste'
  });
};
