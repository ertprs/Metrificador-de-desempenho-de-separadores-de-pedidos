/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios_ceicom', {
    UsuarioID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UsuarioNome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    UsuarioEmail: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    UsuarioTelefone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    UsuarioCelular: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UsuarioEndereco: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UsuarioInfo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UsuarioCidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UsuarioEstado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UsuarioUsuario: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    UsuarioSenha: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    UsuarioTipo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    UsuarioAtivo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    UsuarioAdministrador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    RegrasAcesso: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UsuarioFoto: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'usuarios_ceicom'
  });
};
