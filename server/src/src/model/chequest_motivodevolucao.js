/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chequest_motivodevolucao', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Descricao: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Versao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'chequest_motivodevolucao'
  });
};
