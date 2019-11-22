/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_selfcolor_formulas', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
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
    COD_COR_ETIQUETA: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    ORDENACAO_COR: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NOM_COR_ETIQUETA: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DES_GRUPO: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ORDENACAO_GRUPO: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    DES_PRODUTO: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ORDENACAO_PRODUTO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DES_BASE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DES_EMBALAGEM: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    VOLUME: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'v_selfcolor_formulas'
  });
};
