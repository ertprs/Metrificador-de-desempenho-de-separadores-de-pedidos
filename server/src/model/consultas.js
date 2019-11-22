/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('consultas', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Identificador: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Nivel: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ComandoSQL: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    Categoria: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    SubCategoria: {
      type: DataTypes.STRING(35),
      allowNull: true
    }
  }, {
    tableName: 'consultas'
  });
};
