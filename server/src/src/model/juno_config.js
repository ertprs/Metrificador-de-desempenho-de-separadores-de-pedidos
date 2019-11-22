/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('juno_config', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    isAtivo: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    idEmpresa: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'juno_config'
  });
};
