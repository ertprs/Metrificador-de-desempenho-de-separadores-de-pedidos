/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promocaosite', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mensagem: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'promocaosite'
  });
};
