/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notassaidas_vendasagrupadas', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    nVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'notassaidas_vendasagrupadas'
  });
};
