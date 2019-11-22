/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rota_cliente_sovis', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IdAssRotaCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IdRota: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IdCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DiaSemana: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Ordem: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Frequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PeriodoDia: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PrevisaoVenda: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Status: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: '0'
    },
    DATAHORA_RECEPCAO_ROTACLIENTE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    tableName: 'rota_cliente_sovis'
  });
};
