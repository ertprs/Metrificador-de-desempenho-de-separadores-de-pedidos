/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cidades_estatisticas', {
    IDCidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Habitantes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Possiveis_Clientes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'cidades_estatisticas'
  });
};
