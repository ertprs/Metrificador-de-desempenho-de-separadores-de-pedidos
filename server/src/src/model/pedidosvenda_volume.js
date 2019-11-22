/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidosvenda_volume', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoPedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    NVolume: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    VolumeEspecie: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    VolumeMarca: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'pedidosvenda_volume'
  });
};
