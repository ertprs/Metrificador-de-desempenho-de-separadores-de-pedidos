/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sped_contaanaliticaprod', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TipoProduto: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Conta: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'sped_contaanaliticaprod'
  });
};
