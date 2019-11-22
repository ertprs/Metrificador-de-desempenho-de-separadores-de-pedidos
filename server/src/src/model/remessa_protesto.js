/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('remessa_protesto', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nRemessa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: false
    },
    QtdeContas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    TotalTitulos: {
      type: "DOUBLE",
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'remessa_protesto'
  });
};
