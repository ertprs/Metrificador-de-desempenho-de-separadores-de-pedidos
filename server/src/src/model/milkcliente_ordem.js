/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkcliente_ordem', {
    idCliente: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idOrdem: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
  }, {
    tableName: 'milkcliente_ordem'
  });
};
