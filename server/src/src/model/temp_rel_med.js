/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_rel_med', {
    CodigoProduto: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    Estoque: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'temp_rel_med'
  });
};
