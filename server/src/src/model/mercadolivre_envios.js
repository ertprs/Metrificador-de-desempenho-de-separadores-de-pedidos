/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadolivre_envios', {
    mle_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mle_shipment_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    mle_pack_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'mercadolivre_envios'
  });
};
