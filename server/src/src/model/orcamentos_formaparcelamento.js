/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orcamentos_formaparcelamento', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoOrcamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    },
    idModalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'orcamentos_formaparcelamento'
  });
};
