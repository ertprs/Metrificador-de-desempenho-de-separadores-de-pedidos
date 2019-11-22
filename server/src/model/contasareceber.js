/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contasareceber', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NDocumento: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    },
    DataLancamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Juro: {
      type: "DOUBLE",
      allowNull: true
    },
    Desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorPendente: {
      type: "DOUBLE",
      allowNull: false
    },
    ValorPago: {
      type: "DOUBLE",
      allowNull: true
    },
    Quitado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DataQuitacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    QuantidadePagamentos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Npagamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    EmMaos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cancelada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ValorOriginal: {
      type: "DOUBLE",
      allowNull: true
    },
    VencimentoOriginal: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Historico: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Adiantamento: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CodModalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Modalidade: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    NFAvulsa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SerieAvulsa: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ValorSemJuros: {
      type: "DOUBLE",
      allowNull: true
    },
    BloqEmitido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NossoNumero: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DvNossoNumero: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CodBarras: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LinhaDigitavel: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    Nbanco: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDBLQ: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDRemessa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    BlqAcrescimo: {
      type: "DOUBLE",
      allowNull: true
    },
    BlqAbatimentos: {
      type: "DOUBLE",
      allowNull: true
    },
    CodRenegociacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalPedido: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalFinalVenda: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalQtdeItem: {
      type: "DOUBLE",
      allowNull: true
    },
    CodObjeto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TipoMovRenegociacao: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FichaSCPC: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    DataFichaSCPC: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    UltimaAlteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    UltimoContato: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ProximoContato: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    UsuarioAlterou: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Excluiu_User: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Excluiu_Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Excluiu_Motivo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BlqValorExpresso: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    ObsCorpoBoleto: {
      type: DataTypes.STRING(310),
      allowNull: true
    },
    IDCobradora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IcmsSTNF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorIcmsST: {
      type: "DOUBLE",
      allowNull: true
    },
    ArquivoMorto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SequenciaNF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Boleto_DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Boleto_Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Descontos: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Boleto_Cancelado_DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Boleto_Cancelado_Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Boleto_Cancelado_Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Boleto_Email_Enviado: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    Blq_Carteira: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Protesto_Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Protesto_Remessa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCTE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDCustodia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Condicao: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FParcelamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodFParcelamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Bonificacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    DescontoIssRetido: {
      type: "DOUBLE",
      allowNull: true
    },
    blqValorInfo: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    MyCobradorUltimaNotificacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TipoCR: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    IDCheque: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataCompetencia: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Custodia_IOF: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    ValorComissao: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    ValorBaseComissao: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    BlqDescontoVenc: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    ValorFreteNF: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorOutrasDespNF: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    DataEnviadoCobradora: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataBaixaCobradora: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    MovPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    vcr_uuid_pdv: {
      type: "BINARY(16)",
      allowNull: true
    },
    MyCobradorUltimoLembrete: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IdCampanhaDoacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    EMPRESABOLETO: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    }
  }, {
    tableName: 'contasareceber'
  });
};
