/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuariogridflex', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    FormName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    FlexName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ConteudoArquivo: {
      type: "LONGBLOB",
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'usuariogridflex'
  });
};
