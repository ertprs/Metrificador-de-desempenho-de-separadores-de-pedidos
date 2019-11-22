/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios_tpproduto', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Tipos: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  }, {
    tableName: 'usuarios_tpproduto'
  });
};
