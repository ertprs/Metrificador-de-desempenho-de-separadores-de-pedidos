/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordemproducao_comp_mat', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NProducao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    SeqProd: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IDProdMat: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: false
    },
    Perdas: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Baixado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Lote: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ProducaoPrevenda: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    QtdeUtilizada: {
      type: "DOUBLE",
      allowNull: true
    },
    CustoMat: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'ordemproducao_comp_mat'
  });
};
