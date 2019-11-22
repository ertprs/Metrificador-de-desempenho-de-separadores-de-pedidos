/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alteracoesprecos_estoque', {
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Estoque: {
      type: "DOUBLE",
      allowNull: true
    },
    IDAlteracao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'alteracoesprecos_estoque'
  });
};
