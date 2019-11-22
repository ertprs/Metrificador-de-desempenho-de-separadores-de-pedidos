/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crt_due', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCRT: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DUE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    TerminalExclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    UsuarioExclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataHoraExclusao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'crt_due'
  });
};
