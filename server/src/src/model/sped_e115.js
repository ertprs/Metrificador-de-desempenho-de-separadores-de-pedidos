/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sped_e115', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MesAno: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    CodigoBeneficio: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Valor: {
      type: "DOUBLE(11,2)",
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'sped_e115'
  });
};
