/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('os_relatorio', {
    codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    TotalServ: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalProd: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'os_relatorio'
  });
};
