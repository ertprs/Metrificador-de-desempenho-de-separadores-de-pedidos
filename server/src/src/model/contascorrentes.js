/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contascorrentes', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Banco: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoBanco: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Agencia: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ContaCorrente: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Limite: {
      type: "DOUBLE",
      allowNull: true
    },
    Saldo: {
      type: "DOUBLE",
      allowNull: true
    },
    DataCadastro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    UltimaAlteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Privada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Apelido: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CodigoCredor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ContaExportacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Excluido: {
      type: DataTypes.INTEGER(1).UNSIGNED.ZEROFILL,
      allowNull: true
    },
    UsuarioExclusao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TerminalExclusao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DataExclusao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'contascorrentes'
  });
};
