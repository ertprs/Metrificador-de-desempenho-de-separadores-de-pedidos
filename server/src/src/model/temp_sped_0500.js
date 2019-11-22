/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_sped_0500', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    CodigoContabil: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    tableName: 'temp_sped_0500'
  });
};
