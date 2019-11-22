/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comissao_avulsameta_individual', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Ate: {
      type: "DOUBLE",
      allowNull: true
    },
    Comissao: {
      type: "DOUBLE",
      allowNull: true
    },
    Vendedor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'comissao_avulsameta_individual'
  });
};
