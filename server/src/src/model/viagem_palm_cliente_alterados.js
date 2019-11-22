/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('viagem_palm_cliente_alterados', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Campo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorCadastro: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ValorRecebido: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IDRecepcao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'viagem_palm_cliente_alterados'
  });
};
