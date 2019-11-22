/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkdebitos', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Ano: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Mes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Quitado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Cobrar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'milkdebitos'
  });
};
