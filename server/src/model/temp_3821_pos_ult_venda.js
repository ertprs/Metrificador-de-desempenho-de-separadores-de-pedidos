/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_3821_pos_ult_venda', {
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'temp_3821_pos_ult_venda'
  });
};
