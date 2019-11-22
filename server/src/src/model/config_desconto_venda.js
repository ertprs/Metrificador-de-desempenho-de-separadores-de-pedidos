/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_desconto_venda', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Ate: {
      type: "DOUBLE",
      allowNull: false
    },
    Desconto: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'config_desconto_venda'
  });
};
