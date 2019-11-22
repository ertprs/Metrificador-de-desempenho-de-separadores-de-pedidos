/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sped_cte_inut', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CTe: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'sped_cte_inut'
  });
};
