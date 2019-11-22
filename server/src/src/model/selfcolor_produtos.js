/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('selfcolor_produtos', {
    COD_PRODUTO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    DES_PRODUTO: {
      type: DataTypes.STRING(50),
      allowNull: false
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
    }
  }, {
    tableName: 'selfcolor_produtos'
  });
};
