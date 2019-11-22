/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mic_dta_crt_produtos', {
    CodigoMICDTA: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CodigoCRT: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CodigoCRTProduto: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'mic_dta_crt_produtos'
  });
};
