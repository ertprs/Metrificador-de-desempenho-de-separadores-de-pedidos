/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comissao_escalonadaprod', {
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
    Comissao: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'comissao_escalonadaprod'
  });
};
