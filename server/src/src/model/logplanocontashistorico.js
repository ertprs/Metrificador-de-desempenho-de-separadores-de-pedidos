/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logplanocontashistorico', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IdLogPlanoContas: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Campo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    De: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Para: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'logplanocontashistorico'
  });
};
