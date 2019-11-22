/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelaanvisa', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    EAN: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    ANVISA: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    Versao: {
      type: DataTypes.STRING(4),
      allowNull: false
    }
  }, {
    tableName: 'tabelaanvisa'
  });
};
