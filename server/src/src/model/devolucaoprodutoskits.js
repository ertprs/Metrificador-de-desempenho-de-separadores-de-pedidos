/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('devolucaoprodutoskits', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idDevolucao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    SeqProdDevolucao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IDProdutoPrincipal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    QtdePrincipal: {
      type: "DOUBLE",
      allowNull: false
    },
    IdPRodutoKit: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    QtdeProdKit: {
      type: "DOUBLE",
      allowNull: false
    },
    Empresa: {
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
    tableName: 'devolucaoprodutoskits'
  });
};
