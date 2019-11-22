/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cidades_ceicom', {
    CidadeID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    EstadoID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CidadeNome: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'cidades_ceicom'
  });
};
