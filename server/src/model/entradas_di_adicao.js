/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entradas_di_adicao', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoDI: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Numero: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CodigoFabricante: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    Desconto: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'entradas_di_adicao'
  });
};
