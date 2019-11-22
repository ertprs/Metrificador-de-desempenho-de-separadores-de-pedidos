/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anotacaoentregapandolfi', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataAnotacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Anotacao: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SeqEntrega: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'anotacaoentregapandolfi'
  });
};
