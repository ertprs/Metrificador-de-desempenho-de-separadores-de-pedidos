/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empresasintegracoes', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoEmpresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoIntegradora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoIntegradora: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    tableName: 'empresasintegracoes'
  });
};
