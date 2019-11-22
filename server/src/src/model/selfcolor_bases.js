/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('selfcolor_bases', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    DESCRICAO: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SITUACAO: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    COD_EAN: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    DAT_USER_ATU: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'selfcolor_bases'
  });
};
