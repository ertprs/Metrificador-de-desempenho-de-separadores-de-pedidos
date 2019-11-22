/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('juno_clientes_atendimento', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Atendido: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'juno_clientes_atendimento'
  });
};
