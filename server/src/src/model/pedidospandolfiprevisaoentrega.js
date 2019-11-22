/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidospandolfiprevisaoentrega', {
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
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    DataPrevisao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataEntrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IDVendaEntrega: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'pedidospandolfiprevisaoentrega'
  });
};
