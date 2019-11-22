/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sped_tabajusteipi', {
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
      type: DataTypes.STRING(400),
      allowNull: false
    },
    D_C: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    Versao: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    tableName: 'sped_tabajusteipi'
  });
};
