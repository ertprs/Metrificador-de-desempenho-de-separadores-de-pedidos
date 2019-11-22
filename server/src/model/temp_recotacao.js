/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_recotacao', {
    IdFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Custo: {
      type: "DOUBLE",
      allowNull: true
    },
    NCotacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Pfrete: {
      type: "DOUBLE",
      allowNull: true
    },
    POutros: {
      type: "DOUBLE",
      allowNull: true
    },
    Cpf: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    cnpj: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    NomeFornecedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IDComprador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Obs: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    FretePorConta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    QtdeParcela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    INtervalo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorFrete: {
      type: "DOUBLE",
      allowNull: true
    },
    PIcms: {
      type: "DOUBLE",
      allowNull: true
    },
    NomeCOmprador: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    Emb: {
      type: "DOUBLE",
      allowNull: true
    },
    IPI: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'temp_recotacao'
  });
};
