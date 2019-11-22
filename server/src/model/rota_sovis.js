/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rota_sovis', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IdRotaERP: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    IdUsuario: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Status: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: '0'
    },
    DATAHORA_RECEPCAO_ROTA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    tableName: 'rota_sovis'
  });
};
