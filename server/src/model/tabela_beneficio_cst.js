/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabela_beneficio_cst', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoBeneficio: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Cst: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Versao: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    tableName: 'tabela_beneficio_cst'
  });
};
