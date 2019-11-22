/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blacklist', {
    idBlackList: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Cor: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'blacklist'
  });
};
