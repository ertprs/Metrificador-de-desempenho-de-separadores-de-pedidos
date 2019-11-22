/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comissao_escalonadatab', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDTabela: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    Ate: {
      type: "DOUBLE",
      allowNull: false
    },
    Comissao: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'comissao_escalonadatab'
  });
};
