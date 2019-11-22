/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_valoresadicionais', {
    pva_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pva_CodigoProduto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ca_DESC_ALTERNATIVA: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'produtos_valoresadicionais'
  });
};
