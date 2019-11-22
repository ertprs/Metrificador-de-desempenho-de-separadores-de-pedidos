/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historico_broker', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Detalhamento: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Email_Enviou: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Email_recebeu: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Pedido: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'historico_broker'
  });
};
