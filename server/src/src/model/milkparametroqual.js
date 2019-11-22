/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkparametroqual', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Parametro: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Inte1: {
      type: "DOUBLE",
      allowNull: false
    },
    Inte2: {
      type: "DOUBLE",
      allowNull: false
    },
    Vlr: {
      type: "DOUBLE(11,4)",
      allowNull: false
    },
    Status: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    UM: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: '%'
    }
  }, {
    tableName: 'milkparametroqual'
  });
};
