/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('situacaotributaria', {
    Codigo: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Simples_Nacional: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Versao: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    tableName: 'situacaotributaria'
  });
};
