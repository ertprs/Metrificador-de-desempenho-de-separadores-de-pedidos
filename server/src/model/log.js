/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Tabela: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Operacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Msg: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    idReg: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'log'
  });
};
