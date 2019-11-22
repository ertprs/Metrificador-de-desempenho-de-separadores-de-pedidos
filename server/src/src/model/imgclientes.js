/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('imgclientes', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Imagem: {
      type: "LONGBLOB",
      allowNull: true
    },
    Proprietario: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CodigoDependente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descritivo: {
      type: DataTypes.STRING(75),
      allowNull: true
    }
  }, {
    tableName: 'imgclientes'
  });
};
