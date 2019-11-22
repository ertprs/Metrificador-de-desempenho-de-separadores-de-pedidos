/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modalidade_parc', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDParcelamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IDModalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'modalidade_parc'
  });
};
