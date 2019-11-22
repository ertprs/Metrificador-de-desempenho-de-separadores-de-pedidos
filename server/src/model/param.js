/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('param', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    estampadores: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Funcionarios: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Hora: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    HistoricoVenda: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Bloqueado: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    BloqUser: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BloqData: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BloqSenha: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'param'
  });
};
