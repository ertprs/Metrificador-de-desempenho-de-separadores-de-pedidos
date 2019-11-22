/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sped_tabajusteicms', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoAjuste: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ST: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Versao: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    tableName: 'sped_tabajusteicms'
  });
};
