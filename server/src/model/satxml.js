/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('satxml', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    xml: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    xmlcancelamento: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CHAVECANCELAMENTO: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'satxml'
  });
};
