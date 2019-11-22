/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orcamentosprodutos_selfcolor_produto', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SequenciaProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    COD_PROD_INTERNO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    COD_GRUPO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DES_GRUPO: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    COD_PRODUTO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DES_PRODUTO: {
      type: DataTypes.STRING(50),
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
      allowNull: false
    },
    COD_COR_ETIQUETA: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    NOM_COR_ETIQUETA: {
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
      type: DataTypes.STRING(60),
      allowNull: false
    },
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'orcamentosprodutos_selfcolor_produto'
  });
};
