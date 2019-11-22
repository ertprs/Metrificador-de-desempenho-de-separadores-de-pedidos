/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sped_tabcodicms', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigo: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Versao: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    tableName: 'sped_tabcodicms'
  });
};
