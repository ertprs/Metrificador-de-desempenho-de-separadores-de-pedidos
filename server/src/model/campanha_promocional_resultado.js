/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campanha_promocional_resultado', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCampanha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeCupomEntregue: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeProdVendido: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoGanhador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoSocialGanhador: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'campanha_promocional_resultado'
  });
};
