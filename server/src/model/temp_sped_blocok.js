/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_sped_blocok', {
    CodigoProduto: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    CodigoBarras: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    CodUn: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    unVenda: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TipoProduto: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    NCM: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    EXTIPI: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ProdServ: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    AliquotaICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    pICMSEFET: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    CEST: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    AquisicaoPropria: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'temp_sped_blocok'
  });
};
