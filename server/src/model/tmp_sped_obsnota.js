/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_sped_obsnota', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Descricao: {
      type: DataTypes.STRING(2000),
      allowNull: false
    }
  }, {
    tableName: 'tmp_sped_obsnota'
  });
};
