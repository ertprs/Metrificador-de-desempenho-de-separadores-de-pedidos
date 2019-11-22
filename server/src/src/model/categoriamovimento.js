/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoriamovimento', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Entrada_Saida: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    tableName: 'categoriamovimento'
  });
};
