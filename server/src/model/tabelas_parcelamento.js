/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelas_parcelamento', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_Tabela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ID_Parcelamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'tabelas_parcelamento'
  });
};
