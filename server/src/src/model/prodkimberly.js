/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prodkimberly', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'prodkimberly'
  });
};
