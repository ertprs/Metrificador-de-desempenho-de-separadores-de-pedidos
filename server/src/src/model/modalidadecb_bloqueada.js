/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modalidadecb_bloqueada', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IDModalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'modalidadecb_bloqueada'
  });
};
