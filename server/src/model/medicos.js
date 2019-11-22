/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medicos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Comissao: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'medicos'
  });
};
