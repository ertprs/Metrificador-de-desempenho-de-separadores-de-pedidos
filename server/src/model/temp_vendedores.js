/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_vendedores', {
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NClientes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Atendidos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Supervisor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'temp_vendedores'
  });
};
