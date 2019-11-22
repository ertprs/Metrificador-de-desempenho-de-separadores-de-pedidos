/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seguradoras', {
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nApolice: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nAverbacao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Excluido: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    DataExclusao: {
      type: DataTypes.DATEONLY,
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
    tableName: 'seguradoras'
  });
};
