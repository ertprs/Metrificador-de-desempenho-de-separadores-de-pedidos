/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crm_tpatendimento', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Descricao: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'crm_tpatendimento'
  });
};
