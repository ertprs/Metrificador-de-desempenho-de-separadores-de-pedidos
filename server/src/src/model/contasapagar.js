/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contasapagar', {
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
    CodigoEntrada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NDocumento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
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
      allowNull: true
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
      type: DataTypes.STRING(45),
      allowNull: true
    },
    QuantidadePagamentos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NPagamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    EmMaos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    VencimentoOriginal: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ValorOriginal: {
      type: "DOUBLE",
      allowNull: true
    },
    Cancelada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    nComissao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TipoComissao: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FuncComissao: {
      type: DataTypes.INTEGER(11),
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
    SequenciaServico: {
      type: "DOUBLE",
      allowNull: true
    },
    CodRenegociacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoFormaPagamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TipoMovRenegociacao: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NFAVULSA: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SERIEAVULSA: {
      type: DataTypes.STRING(45),
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
    DataAlterado: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    Excluiu_User: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Excluiu_Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Excluiu_MOtivo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Obs: {
      type: DataTypes.STRING(310),
      allowNull: true
    },
    NCheque: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ChequeEmissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ChequePreDatado: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    OrigemCodigoEntrada: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    EmCH: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    idRemessaFolhaPagamento: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    restrito: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    CodigoContaCorrente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DataAgendamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataCompetencia: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    SEQUENCIANF: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IDBlq: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    TpDeducaoIRPJ: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    ValorMoedaCobranca: {
      type: "DOUBLE",
      allowNull: true
    },
    MoedaCobranca: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    idGNRE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'contasapagar'
  });
};
