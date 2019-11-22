/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkprecoqtdlitros', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    De: {
      type: "DOUBLE(11,2)",
      allowNull: false
    },
    Ate: {
      type: "DOUBLE(11,2)",
      allowNull: false
    },
    Valor: {
      type: "DOUBLE(11,4)",
      allowNull: false
    },
    TipoCobranca: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'R'
    }
  }, {
    tableName: 'milkprecoqtdlitros'
  });
};
