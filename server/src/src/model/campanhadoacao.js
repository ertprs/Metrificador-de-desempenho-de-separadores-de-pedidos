/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campanhadoacao', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataCadastro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DataFinalizacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    IDCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IDPlanoSubConta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Sobre: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    Objetivo: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'campanhadoacao'
  });
};
