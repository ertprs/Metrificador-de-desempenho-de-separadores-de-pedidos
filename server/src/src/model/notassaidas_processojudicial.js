/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notassaidas_processojudicial', {
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
    TipoProcesso: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'notassaidas_processojudicial'
  });
};
