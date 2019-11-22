/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkmodalidadediv', {
    IdModalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Modalidade: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Divide: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: 'S'
    }
  }, {
    tableName: 'milkmodalidadediv'
  });
};
