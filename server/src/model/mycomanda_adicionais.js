/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mycomanda_adicionais', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    ValorUnitario: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Status: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'a'
    },
    DataHoraCadastro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DataHoraExclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UsuarioExclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TerminalExclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'mycomanda_adicionais'
  });
};
