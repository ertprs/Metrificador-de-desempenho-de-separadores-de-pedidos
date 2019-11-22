/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dpec', {
    idDPEC: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DATAHORA: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CHAVENFE: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    RETORNO: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'dpec'
  });
};
