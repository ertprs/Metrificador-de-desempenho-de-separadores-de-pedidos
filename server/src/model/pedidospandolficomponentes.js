/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidospandolficomponentes', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqItem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    QuantidadeProduto: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'pedidospandolficomponentes'
  });
};
