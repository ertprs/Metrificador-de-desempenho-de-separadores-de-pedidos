/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('imgdocs', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    NomeDOC: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Imagem: {
      type: "LONGBLOB",
      allowNull: true
    }
  }, {
    tableName: 'imgdocs'
  });
};
