/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estados_ceicom', {
    EstadoID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    EstadoNome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    EstadoSigla: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'estados_ceicom'
  });
};
