/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cadeiaspreco', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    DataUltimaAlteracao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'cadeiaspreco'
  });
};
