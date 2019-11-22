/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mp_item_log', {
    ilo_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ilo_ite_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ilo_propriedade: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ilo_valor_antigo: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ilo_valor_novo: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ilo_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ilo_usuario: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'mp_item_log'
  });
};
