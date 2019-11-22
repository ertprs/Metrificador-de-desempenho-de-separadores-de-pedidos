/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordemproducao_comp', {
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
    IDProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: false
    },
    Lote: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Baixado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CodigoLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeLanc: {
      type: "DOUBLE UNSIGNED",
      allowNull: true
    },
    Data_Lancamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ProducaoPrevenda: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    QtdeParcial: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeAuditada: {
      type: "DOUBLE",
      allowNull: true
    },
    LinhaGrade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ColunaGrade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqPreVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'ordemproducao_comp'
  });
};
