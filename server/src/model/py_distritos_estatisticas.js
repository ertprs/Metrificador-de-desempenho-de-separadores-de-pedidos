/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('py_distritos_estatisticas', {
    IDCidade: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    Habitantes: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    Possiveis_clientes: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'py_distritos_estatisticas'
  });
};
