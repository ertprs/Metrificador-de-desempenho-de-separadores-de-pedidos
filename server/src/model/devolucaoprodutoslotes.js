/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('devolucaoprodutoslotes', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IdDevolucao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IdProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    QtdePrincipal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    QtdeDevolvida: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SequenciaVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'devolucaoprodutoslotes'
  });
};
