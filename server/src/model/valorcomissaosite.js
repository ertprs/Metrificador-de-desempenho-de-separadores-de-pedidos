/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('valorcomissaosite', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'valorcomissaosite'
  });
};
