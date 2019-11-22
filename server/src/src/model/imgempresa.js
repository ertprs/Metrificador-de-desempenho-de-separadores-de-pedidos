/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('imgempresa', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoEmpresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Imagem: {
      type: "LONGBLOB",
      allowNull: true
    }
  }, {
    tableName: 'imgempresa'
  });
};
