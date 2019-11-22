/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subcontas', {
    IDSUB: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    IDCONTAS: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NOMESUBCONTA: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'subcontas'
  });
};
