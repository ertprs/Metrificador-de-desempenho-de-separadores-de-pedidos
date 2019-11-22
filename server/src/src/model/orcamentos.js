/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orcamentos', {
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
      type: DataTypes.STRING(35),
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
    ValorParcelas: {
      type: "DOUBLE",
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
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(1000),
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
      type: DataTypes.STRING(25),
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
      type: DataTypes.STRING(50),
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
    PrazoMedio: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TaxaJuro: {
      type: "DOUBLE",
      allowNull: true
    },
    TipoVenda: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    UserID: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDStatusOR: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    StatusOR: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idcategoria: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Idtransportadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Emit: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Frete: {
      type: "DOUBLE",
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Marca2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Especie: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE UNSIGNED",
      allowNull: true
    },
    ExclusaoUsuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ExclusaoTerminal: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    ExclusaoDataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExclusaoMotivo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Comprador: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EmailComprador: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IPI: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PrazoEntrega: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ValidadeProposta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Data_Primeira_Parcela: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TelefoneCliente: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CodigoModalidadeCB: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ModalidadeCB: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Presenca: {
      type: DataTypes.INTEGER(1),
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
    CodigoAntt: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UFPlaca: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    DavID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    id_end_entrega: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    EndNumero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    EndBairro: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    EndCep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    EndFone: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    EndUF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    EndCidade: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    NumeroComanda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ImagemAnexo: {
      type: "LONGBLOB",
      allowNull: true
    },
    DescricaoImagemAnexo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Observacao1: {
      type: DataTypes.STRING(300),
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
    QuemIndicou: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TotalIPI: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    Motor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Ano: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NomeMotorista: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    codObjeto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IDMeusPedidos: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    NumeroPedidoVendedor: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FinalidadeVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    NumeroMesa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TipoIntervalo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ImprimirComanda: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    SupervisorExclusao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TotalICMSST: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalPedidocomImposto: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoCidadeIbge: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    NomeFantasia: {
      type: DataTypes.STRING(75),
      allowNull: true
    }
  }, {
    tableName: 'orcamentos'
  });
};
