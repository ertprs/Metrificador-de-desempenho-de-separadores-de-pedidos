/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkassociacao', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataCadastro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Excluido: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    DataExcluido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idPro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    idModalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DiaPgm: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Vinculo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    UsuarioExclusao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TerminalExclusao: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'milkassociacao'
  });
};
