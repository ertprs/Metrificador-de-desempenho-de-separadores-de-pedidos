/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ncmcadpro', {
    NCM: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    CST: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Aliq_ICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    Base_ICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    NumDecretos: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CSTOriginal: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    tableName: 'ncmcadpro'
  });
};
