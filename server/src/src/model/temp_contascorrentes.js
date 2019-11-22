/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_contascorrentes', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Banco: {
      type: DataTypes.STRING(50),
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
    Saldo: {
      type: "DOUBLE",
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
    ChqPre: {
      type: "DOUBLE",
      allowNull: true
    },
    SaldoReal: {
      type: "DOUBLE",
      allowNull: true
    },
    Limite: {
      type: "DOUBLE",
      allowNull: true
    },
    ChqPreAte: {
      type: "DOUBLE",
      allowNull: true
    },
    ChqPreApos: {
      type: "DOUBLE",
      allowNull: true
    },
    SaldoAte: {
      type: "DOUBLE",
      allowNull: true
    },
    SaldoApos: {
      type: "DOUBLE",
      allowNull: true
    },
    Privada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
    tableName: 'temp_contascorrentes'
  });
};
