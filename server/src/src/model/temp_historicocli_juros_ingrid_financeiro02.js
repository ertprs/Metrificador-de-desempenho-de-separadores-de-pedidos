/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_historicocli_juros_ingrid_financeiro02', {
    Seq: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqCr: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Juros: {
      type: "DOUBLE",
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    tableName: 'temp_historicocli_juros_ingrid_financeiro02'
  });
};
