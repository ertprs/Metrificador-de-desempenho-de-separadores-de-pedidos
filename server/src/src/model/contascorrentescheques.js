/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contascorrentescheques', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoConta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    NumeroCheque: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: false
    },
    Quitado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    DataQuitacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    RazaoFornecedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    VctoOriginal: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodMovimentos: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    UserExcluiu: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TerminalExcluiu: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataHoraExcluiu: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Sustado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    SemFundo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    TipoMov: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    NParcela: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    QtdeParcela: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'contascorrentescheques'
  });
};
