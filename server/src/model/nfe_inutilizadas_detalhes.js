/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfe_inutilizadas_detalhes', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ModeloNF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '55'
    }
  }, {
    tableName: 'nfe_inutilizadas_detalhes'
  });
};
