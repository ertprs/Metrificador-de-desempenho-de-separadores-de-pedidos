/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cobrancas_despesas', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDlote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'cobrancas_despesas'
  });
};
