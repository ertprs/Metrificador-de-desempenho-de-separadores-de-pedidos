/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendas', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
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
    Tabela: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoCliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FormaParcelamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ValorEntrada: {
      type: "DOUBLE",
      allowNull: true
    },
    QuantidadePag: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorFinalPagamentos: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalPedido: {
      type: "DOUBLE",
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Objeto: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    NSerial: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Marca: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Modelo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Cor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Peso: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    KM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ServicosExecutar: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Cancelada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TotalServicos: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorFaturado: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    CodigoTransportadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FretePorConta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorFrete: {
      type: "DOUBLE",
      allowNull: true
    },
    VolumeNumero: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    VolumeMarca: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    VolumeEspecie: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    VolumeQtde: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalPesoB: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalPesoL: {
      type: "DOUBLE",
      allowNull: true
    },
    Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    UfPlaca: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ConsumidorFinal: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Observacao2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    Observacao3: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    NomeMotorista: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    MotivoExclusao: {
      type: DataTypes.STRING(500),
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
    LiberadoPor: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    LIberadoData: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NPedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ClienteNF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NVendaExterna: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NVendaExternaTemp: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
    UF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CodObjeto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Fone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DataAlteracao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraAlteracao: {
      type: DataTypes.TIME,
      allowNull: true
    },
    DataFinalizacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodPedDev: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UserID: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CodigoModalidadeCB: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ModalidadeCB: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    IDStatusOS: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    StatusOS: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Pres_CodCli: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Pres_Nome: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    Pres_CPF: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Pres_RG: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Pres_Endereco: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Pres_Numero: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Pres_Bairro: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Pres_Telefone: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    Pres_Cep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Pres_Cidade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Pres_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PrazoEntrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Projeto: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    DescontoGeral: {
      type: "DOUBLE",
      allowNull: true
    },
    AcrescimoGeral: {
      type: "DOUBLE",
      allowNull: true
    },
    Romaneio_SEP: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    nRequisicao: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Solicitante_Requisicao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Autorizado_Nome: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Autorizado_CPF: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    CodCondicional: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeFantasia: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Valor_ICMS_ST_NF: {
      type: "DOUBLE",
      allowNull: true
    },
    CodCategoria: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCarregamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TotalCusto: {
      type: "DOUBLE",
      allowNull: true
    },
    Rentabilidade: {
      type: "DOUBLE",
      allowNull: true
    },
    Palete: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Pacote: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    NumeroPedidoVendedor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    id_End_Entrega: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodOrcamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FPAuditado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodOrcamentoAgrupados: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    MotivoDevolucao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SupervisorExclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodVendaAgrupadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoAntt: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NumeroNF: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ObsExtra: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    DataEntregaVenda: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ObsInterna: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    TotalSis: {
      type: "DOUBLE",
      allowNull: true
    },
    Usuario_Auditado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataHora_Auditado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Presenca: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ClienteCRCodigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ClienteCrNome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TelefoneMotorista: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DataHora_Prova: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataHora_Entrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IDMedico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Separado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Separacao_Data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Separacao_Usuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Contribuinte_Icms: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NumeroNFSE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TotalDolar: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalGuarani: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalProdutos: {
      type: "DOUBLE",
      allowNull: true
    },
    QuemIndicou: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    KmSaida: {
      type: "DOUBLE",
      allowNull: true
    },
    HoraSaida: {
      type: DataTypes.TIME,
      allowNull: true
    },
    KmChegada: {
      type: "DOUBLE",
      allowNull: true
    },
    HoraChegada: {
      type: DataTypes.TIME,
      allowNull: true
    },
    fca_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    fpl_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataAgendamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ISSRetido: {
      type: "DOUBLE",
      allowNull: true
    },
    IndexCarregamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Motor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Ano: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Reboque1_Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Reboque1_UFPlaca: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Reboque1_RNTC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Reboque2_Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Reboque2_UFPlaca: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Reboque2_RNTC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Reboque3_Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Reboque3_UFPlaca: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Reboque3_RNTC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PontuacaoPorValor: {
      type: "DOUBLE",
      allowNull: true
    },
    IdDevolucao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ValorDevolucaoAbatimento: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    idVendaIbasi: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Ibasi_Cancelada: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    MinutosNotificacaoAgendamento: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NotificouAgendamento: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Autorizado_Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TOTALM3: {
      type: "DOUBLE",
      allowNull: true
    },
    Usuario_PreVenda: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DataFechado: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IdTipoPedidoMobile: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    descricaoTipoPedidoMobile: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ObservacaoExtra: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Complemento: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    FinalidadeVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    MovPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    CodigoCidadeIbge: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    ven_uuid_pdv: {
      type: "BINARY(16)",
      allowNull: true
    },
    VLR_TROCO_PDV: {
      type: "DOUBLE",
      allowNull: true
    },
    Terminal_Lancamento: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Usuario_Lancamento: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    IdPedidoUsuario_Sovis: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    QuemIndicou2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NPrisma: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'vendas'
  });
};
