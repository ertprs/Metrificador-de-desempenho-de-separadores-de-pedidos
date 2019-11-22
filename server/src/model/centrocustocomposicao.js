/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('centrocustocomposicao', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'centrocustocomposicao'
  });
};
