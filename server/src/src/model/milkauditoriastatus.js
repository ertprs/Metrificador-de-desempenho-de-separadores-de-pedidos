/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkauditoriastatus', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Status: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DtStatus: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'milkauditoriastatus'
  });
};
