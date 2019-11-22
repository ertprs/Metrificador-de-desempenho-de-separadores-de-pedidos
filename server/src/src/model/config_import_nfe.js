/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_import_nfe', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    REF_CodFabrica: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Entrada_Imp_Emb: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'config_import_nfe'
  });
};
