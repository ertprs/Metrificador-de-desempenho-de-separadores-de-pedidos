/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordemproducao_residuosobra', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NProducao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IdProduto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'ordemproducao_residuosobra'
  });
};
