/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_especie', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'petshop_especie'
  });
};
