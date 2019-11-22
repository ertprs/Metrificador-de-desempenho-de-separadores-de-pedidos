/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes_contatos', {
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Telefone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    DataCadastro: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp')
    },
    DataExclusao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'clientes_contatos'
  });
};
