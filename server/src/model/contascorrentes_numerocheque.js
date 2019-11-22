/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contascorrentes_numerocheque', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoConta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    NumeroCheque: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Observacao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'contascorrentes_numerocheque'
  });
};
