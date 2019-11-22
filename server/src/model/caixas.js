/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caixas', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Diario: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    ChequeAutomatico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DiarioRec: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    ExibeTransfPendente: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ContaExportacao: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    ExclusivoPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    TERMINAL_CONFIGURADO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TerminalUltimaAlteracao: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    UsuarioUltimaAlteracao: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'caixas'
  });
};
