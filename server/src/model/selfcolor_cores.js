/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('selfcolor_cores', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
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
    NOM_COR: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DES_COR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SITUACAO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ORDENACAO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DAT_USER_ATU: {
      type: DataTypes.DATE,
      allowNull: false
    },
    COD_COR_ETIQUETA: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'selfcolor_cores'
  });
};
