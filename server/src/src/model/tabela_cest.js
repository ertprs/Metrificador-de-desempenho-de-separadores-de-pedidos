/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabela_cest', {
    CEST: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    NCM: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    VERSAO: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'tabela_cest'
  });
};
