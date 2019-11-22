/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_selfcolor_bases', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    COD_PROD_INTERNO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    COD_GRUPO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DES_GRUPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    COD_PRODUTO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DES_PRODUTO: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    COD_BASE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DES_BASE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    COD_EMBALAGEM: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DES_EMBALAGEM: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    VOL_EMBALAGEM: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'produtos_selfcolor_bases'
  });
};
