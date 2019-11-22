/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entradas_xml', {
    CodigoEntrada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Arquivo: {
      type: "LONGBLOB",
      allowNull: true
    },
    NomeArquivo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'entradas_xml'
  });
};
