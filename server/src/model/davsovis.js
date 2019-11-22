/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('davsovis', {
    DATAHORA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IDUSUARIO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IDCLIENTE: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'davsovis'
  });
};
