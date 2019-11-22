/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mo_vendas_comissao', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCorretor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Percentual: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'mo_vendas_comissao'
  });
};
