/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkmovimentacoes_ocorrencias', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoTransPro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE(11,3)",
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DeCre: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Reais: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    CodigoPrevia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DescricaoPrevia: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TipoPrevia: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FormaRecebimento: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MesReferente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    AnoReferente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QuantidadePagamentosVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    nPagamentoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'milkmovimentacoes_ocorrencias'
  });
};
