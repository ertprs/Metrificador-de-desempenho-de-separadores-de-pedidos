/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ramosatividades', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoExterno: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'ramosatividades'
  });
};
