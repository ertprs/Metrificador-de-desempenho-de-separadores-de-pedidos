/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fotos', {
    REF: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Foto: {
      type: "LONGBLOB",
      allowNull: true
    }
  }, {
    tableName: 'fotos'
  });
};
