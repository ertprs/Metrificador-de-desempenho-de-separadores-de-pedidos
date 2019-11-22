/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contabilista_autxml', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    CNPJ: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'contabilista_autxml'
  });
};
