/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('checklist', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DataCadastro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Exclusao_Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Exclusao_Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Exclusao_Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Objeto: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    tableName: 'checklist'
  });
};
