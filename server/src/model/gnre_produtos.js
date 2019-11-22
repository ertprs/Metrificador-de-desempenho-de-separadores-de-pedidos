/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gnre_produtos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Receita: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    tableName: 'gnre_produtos'
  });
};
