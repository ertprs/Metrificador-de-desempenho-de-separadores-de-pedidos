/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkocorrencias', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoTransPro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Razaosocial: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE(11,3)",
      allowNull: true,
      defaultValue: '0.000'
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DataCadastrada: {
      type: DataTypes.DATE,
      allowNull: false
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
      allowNull: true,
      defaultValue: '0.0000'
    },
    CodigoPrevia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Usuario_Cadastrou: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    vlrLeiteAcido: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    QtdLeiteAcido: {
      type: "DOUBLE(11,3)",
      allowNull: true,
      defaultValue: '0.000'
    },
    CodigoConta: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    UPF: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    QuantidadePagamentosVenda: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    nPagamentoVenda: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'milkocorrencias'
  });
};
