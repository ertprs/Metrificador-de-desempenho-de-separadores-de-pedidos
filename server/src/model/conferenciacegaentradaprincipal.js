/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('conferenciacegaentradaprincipal', {
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoSeqNota: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Fornecedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NumeroNota: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UsuarioConferencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(570),
      allowNull: true
    },
    ObservacaoAuditada: {
      type: DataTypes.STRING(570),
      allowNull: true
    },
    Situacao: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    TerminalConferencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'conferenciacegaentradaprincipal'
  });
};
