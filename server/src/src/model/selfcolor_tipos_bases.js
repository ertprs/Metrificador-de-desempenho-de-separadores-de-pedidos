/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('selfcolor_tipos_bases', {
    COD_BASE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    DES_BASE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SITUACAO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'A'
    },
    DAT_USER_ATU: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'selfcolor_tipos_bases'
  });
};
