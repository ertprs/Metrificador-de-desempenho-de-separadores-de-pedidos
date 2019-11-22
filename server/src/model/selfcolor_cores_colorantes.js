/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('selfcolor_cores_colorantes', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    COD_GRUPO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    COD_PRODUTO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    COD_BASE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    COD_EMBALAGEM: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    COD_COR: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    COD_COLORANTE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    QTDE: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    DAT_USER_ATU: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'selfcolor_cores_colorantes'
  });
};
