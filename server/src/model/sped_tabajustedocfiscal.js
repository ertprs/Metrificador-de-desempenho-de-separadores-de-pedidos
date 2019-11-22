/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sped_tabajustedocfiscal', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoAjuste: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tableName: 'sped_tabajustedocfiscal'
  });
};
