/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milktransportadores_rotas', {
    CodigoTransRota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoTrans: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoRota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'milktransportadores_rotas'
  });
};
