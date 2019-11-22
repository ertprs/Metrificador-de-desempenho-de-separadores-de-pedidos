/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_campos', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Tela: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Campo: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Titulo: {
      type: DataTypes.STRING(35),
      allowNull: true
    }
  }, {
    tableName: 'config_campos'
  });
};
