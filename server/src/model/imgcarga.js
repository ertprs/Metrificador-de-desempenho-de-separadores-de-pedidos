/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('imgcarga', {
    IDCarga: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Arquivo: {
      type: "LONGBLOB",
      allowNull: true
    }
  }, {
    tableName: 'imgcarga'
  });
};
