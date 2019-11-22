/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('juno_clientes', {
    idCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Tel: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Tel1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Tel2: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'juno_clientes'
  });
};
