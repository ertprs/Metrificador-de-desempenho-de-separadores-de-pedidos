/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('conferencia_cega_nota_entrada', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SequenciaNota: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    QuantidadeConferida: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DataHoraConferiu: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UsuarioConferiu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TerminalConferiu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(570),
      allowNull: true
    }
  }, {
    tableName: 'conferencia_cega_nota_entrada'
  });
};
