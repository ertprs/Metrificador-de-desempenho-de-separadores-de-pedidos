/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('imgseparacao', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoSeparacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(450),
      allowNull: true
    },
    Imagem: {
      type: "LONGBLOB",
      allowNull: true
    }
  }, {
    tableName: 'imgseparacao'
  });
};
