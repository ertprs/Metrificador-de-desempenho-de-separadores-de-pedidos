/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contas', {
    IDCONTAS: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NomeConta: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'contas'
  });
};
