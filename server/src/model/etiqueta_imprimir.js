/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('etiqueta_imprimir', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    Referencia: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Fabricante: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Venda: {
      type: "DOUBLE",
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CustoFinal: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoLinha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoColuna: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeLinha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NomeColuna: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MostraTitulo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TituloLinha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TituloColuna: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodBarras: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeCliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FantasiaCliente: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    EnderecoCliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TelefoneCliente: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CidadeCLiente: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Cep: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    QtdeProduto: {
      type: "DOUBLE",
      allowNull: true
    },
    UnVenda: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TipoEtq: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    DataPedido: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Indexador: {
      type: "DOUBLE",
      allowNull: true
    },
    Moeda: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ObsProduto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ObsVenda1: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    ObsVenda2: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ObsVenda3: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    AGRUPA: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    BAIRROCLIENTE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CNPJCLIENTE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    IECLIENTE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Prateleira: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Gondula: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Gaveta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Detalhamento: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Frase: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Frase2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EmBranco: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Nome_Secao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Nome_Grupo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Nome_SubGrupo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NF: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    DATANF: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    AvancoETQ: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    FormaParcelamento: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    ValorParcelamento: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorParcela: {
      type: "DOUBLE",
      allowNull: true
    },
    NomeTabela1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorTabela1: {
      type: "DOUBLE",
      allowNull: true
    },
    NomeTabela2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorTabela2: {
      type: "DOUBLE",
      allowNull: true
    },
    NomeTabela3: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorTabela3: {
      type: "DOUBLE",
      allowNull: true
    },
    Volume: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Vendedor: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    NomeTransportadora: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    QtdeEtq_Total_Item: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigodeFabrica: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    EAN_13_CodBarras: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    FormaParcelamento2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorParcelamento2: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorParcela2: {
      type: "DOUBLE",
      allowNull: true
    },
    FormaParcelamento3: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorParcelamento3: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorParcela3: {
      type: "DOUBLE",
      allowNull: true
    },
    FormaParcelamento4: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorParcelamento4: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorParcela4: {
      type: "DOUBLE",
      allowNull: true
    },
    FormaParcelamento5: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorParcelamento5: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorParcela5: {
      type: "DOUBLE",
      allowNull: true
    },
    FormaParcelamento6: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorParcelamento6: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorParcela6: {
      type: "DOUBLE",
      allowNull: true
    },
    FormaParcelamento7: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorParcelamento7: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorParcela7: {
      type: "DOUBLE",
      allowNull: true
    },
    FormaParcelamento8: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorParcelamento8: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorParcela8: {
      type: "DOUBLE",
      allowNull: true
    },
    FormaParcelamento9: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorParcelamento9: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorParcela9: {
      type: "DOUBLE",
      allowNull: true
    },
    FormaParcelamento10: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorParcelamento10: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorParcela10: {
      type: "DOUBLE",
      allowNull: true
    },
    DataPromocao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ValorPromocao: {
      type: "DOUBLE",
      allowNull: true
    },
    NomeLote: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValidadeLote: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ValorCusto: {
      type: "DOUBLE",
      allowNull: true
    },
    FabricacaoLote: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Colecao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Objeto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nSerial: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ServicoExecutar: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    QtdeCxVenda: {
      type: "DOUBLE",
      allowNull: true
    },
    DadosTecnicos: {
      type: DataTypes.STRING(8000),
      allowNull: true
    },
    nPedido: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoOp: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataOp: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    QtdeProdutoOp: {
      type: "DOUBLE",
      allowNull: true
    },
    ResponsavelOp: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoRota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Rota: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PrioridadeEntrega: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataProduzidaOP: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    FracionarioCodigobarras: {
      type: "DOUBLE",
      allowNull: true
    },
    IndexProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PagamentoFrete: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Prod_PesoBruto: {
      type: "DOUBLE",
      allowNull: true
    },
    Prod_PesoLiquido: {
      type: "DOUBLE",
      allowNull: true
    },
    Prod_PesoTara: {
      type: "DOUBLE",
      allowNull: true
    },
    Prod_VolumeML: {
      type: "DOUBLE",
      allowNull: true
    },
    Prod_Volume: {
      type: "DOUBLE",
      allowNull: true
    },
    Prod_UnVolume: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Prod_Altura: {
      type: "DOUBLE",
      allowNull: true
    },
    Prod_Largura: {
      type: "DOUBLE",
      allowNull: true
    },
    Prod_Comprimento: {
      type: "DOUBLE",
      allowNull: true
    },
    TextoObserva: {
      type: DataTypes.STRING(170),
      allowNull: true
    },
    TextoObservaEntradas: {
      type: DataTypes.STRING(170),
      allowNull: true
    },
    DataEntradaNF: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    AdicionalGelado: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoTransportadoraRota: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ObsCliente: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CodigoTransportadoraPedido: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    RazaoTransportadoraPedido: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FantasiaTransportadoraPedido: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    ComplementoCliente: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    VolumeNF: {
      type: "DOUBLE",
      allowNull: true
    },
    PesoBrutoNF: {
      type: "DOUBLE",
      allowNull: true
    },
    RazaoFornecedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    QtdeMin_Promocao: {
      type: "DOUBLE",
      allowNull: true
    },
    RazaoFornecedorNota: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NOM_COR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DES_COR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TEXTOOBSERVACAO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Multiplo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    EAN_Grade: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'etiqueta_imprimir'
  });
};
