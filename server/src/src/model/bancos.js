/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bancos', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Nome: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Sigla: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    nomebanco: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '0'
    },
    Limite: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'bancos'
  });
};
