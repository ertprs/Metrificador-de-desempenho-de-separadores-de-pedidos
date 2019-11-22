/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('viagem_palm_log', {
    CodigoViagem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Clientes_novos: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Clientes_Editados: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Pedidos_Novos: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Pedidos_Editados: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Pedidos_Cancelados: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'viagem_palm_log'
  });
};
