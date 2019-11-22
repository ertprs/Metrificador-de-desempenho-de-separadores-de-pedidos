/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log_ibasi', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    idVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Operacao: {
      type: DataTypes.ENUM('INCLUSAO','ALTERACAO','EXCLUSAO'),
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Status: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Mensagem: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'log_ibasi'
  });
};
