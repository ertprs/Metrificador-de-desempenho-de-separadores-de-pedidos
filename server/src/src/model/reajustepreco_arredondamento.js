/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reajustepreco_arredondamento', {
    codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    de: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    ate: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    valorFinal: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'reajustepreco_arredondamento'
  });
};
