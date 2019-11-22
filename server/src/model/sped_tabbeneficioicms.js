/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sped_tabbeneficioicms', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoBeneficio: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Versao: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    tableName: 'sped_tabbeneficioicms'
  });
};
