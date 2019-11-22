/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plano_contas', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    tableName: 'plano_contas'
  });
};
