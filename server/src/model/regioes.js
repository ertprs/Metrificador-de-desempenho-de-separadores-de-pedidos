/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regioes', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Indice: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CustoKMRodado: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'regioes'
  });
};
