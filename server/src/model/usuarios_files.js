/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios_files', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    File_menu: {
      type: "LONGBLOB",
      allowNull: true
    },
    File_Telas: {
      type: "LONGBLOB",
      allowNull: true
    },
    NomeUsuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'usuarios_files'
  });
};
