/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programasextra', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Titulo: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    Caminho: {
      type: DataTypes.STRING(266),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'programasextra'
  });
};
