/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logplanocontas', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Alteracao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'logplanocontas'
  });
};
