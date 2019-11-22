/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regrasgrupos', {
    Id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    GrupoNome: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'regrasgrupos'
  });
};
