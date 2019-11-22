/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comissao_avulsameta', {
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
    }
  }, {
    tableName: 'comissao_avulsameta'
  });
};
