/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cfop_devolucao', {
    CFOP: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    Versao: {
      type: DataTypes.STRING(6),
      allowNull: false
    }
  }, {
    tableName: 'cfop_devolucao'
  });
};
