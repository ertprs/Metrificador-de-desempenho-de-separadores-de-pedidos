/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cst_ipi', {
    ID: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    Descricao: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Versao: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    tableName: 'cst_ipi'
  });
};
