/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_impostos', {
    ICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    ICMSST: {
      type: "DOUBLE",
      allowNull: true
    },
    PIS: {
      type: "DOUBLE",
      allowNull: true
    },
    COFINS: {
      type: "DOUBLE",
      allowNull: true
    },
    IPI: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'temp_impostos'
  });
};
