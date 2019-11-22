/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fidelidade_clientes', {
    FCL_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    FCL_NOME: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FCL_SOBRENOME: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FCL_CPF: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FCL_TIME: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FCL_DDD: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FCL_FONE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FCL_CARTAO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FCL_DATAINC: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    tableName: 'fidelidade_clientes'
  });
};
