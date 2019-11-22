/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('motivosdevolucao', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'motivosdevolucao'
  });
};
