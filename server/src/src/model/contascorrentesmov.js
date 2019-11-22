/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contascorrentesmov', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoConta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    SaldoAnterior: {
      type: "DOUBLE",
      allowNull: true
    },
    SaldoAtual: {
      type: "DOUBLE",
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    CodigoMovimento: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    Comprovante: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DataBanco: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoMovimentoOrigem: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Marcado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CodigoCliFor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    HistoricoCC: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Conciliado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    nRemessa: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Transferencia: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ContaOrigem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ContaDestino: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'contascorrentesmov'
  });
};
