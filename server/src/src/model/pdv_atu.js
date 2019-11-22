/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pdv_atu', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Ult_Alteracao: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'pdv_atu'
  });
};
