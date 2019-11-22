/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caixaaberturas', {
    Sequencia: {
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
    CodigoCaixa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Caixa: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SaldoInicial: {
      type: "DOUBLE",
      allowNull: true
    },
    SaldoFinal: {
      type: "DOUBLE",
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DataFechamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraFechamento: {
      type: DataTypes.TIME,
      allowNull: true
    },
    UsuarioFechamento: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    VenAvista: {
      type: "DOUBLE",
      allowNull: true
    },
    VenAPrazo: {
      type: "DOUBLE",
      allowNull: true
    },
    RecAvista: {
      type: "DOUBLE",
      allowNull: true
    },
    RecAPrazo: {
      type: "DOUBLE",
      allowNull: true
    },
    Transferencias: {
      type: "DOUBLE",
      allowNull: true
    },
    TicketMedio: {
      type: "DOUBLE",
      allowNull: true
    },
    Estornos: {
      type: "DOUBLE",
      allowNull: true
    },
    EstornosCXAtual: {
      type: "DOUBLE",
      allowNull: true
    },
    EstornosCXAnt: {
      type: "DOUBLE",
      allowNull: true
    },
    Qtde_Orc_Aberto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qtde_Cond_Aberto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qtde_PreVenda_Aberto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qtde_Dev_Aberto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qtde_OS_Aberto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    AbertoPDV: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    AbertoPDV1: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Pagamentos: {
      type: "DOUBLE",
      allowNull: true
    },
    ObservacaoFechamento: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    SangriaCaixaCego: {
      type: "DOUBLE",
      allowNull: true
    },
    ReforcoCaixaCego: {
      type: "DOUBLE",
      allowNull: true
    },
    Sangria: {
      type: "DOUBLE",
      allowNull: true
    },
    Reforco: {
      type: "DOUBLE",
      allowNull: true
    },
    TransferenciasContaCartao: {
      type: "DOUBLE",
      allowNull: true
    },
    TransferenciasSangriaPDV: {
      type: "DOUBLE",
      allowNull: true
    },
    VenDesconto: {
      type: "DOUBLE",
      allowNull: true
    },
    MovPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    TransferenciaCaixaCego: {
      type: "DOUBLE",
      allowNull: true
    },
    TransferenciasContaCorrente: {
      type: "DOUBLE",
      allowNull: true
    },
    TransferenciasContaCorrenteCaixa: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'caixaaberturas'
  });
};
