/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acertoestoque', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: false
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    },
    Obs: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeFornecedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BaixaComposicao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ValorAntes: {
      type: "DOUBLE",
      allowNull: true
    },
    EstqAtual: {
      type: "DOUBLE",
      allowNull: true
    },
    EstqNovo: {
      type: "DOUBLE",
      allowNull: true
    },
    Peso: {
      type: "DOUBLE",
      allowNull: true
    },
    Tipo_Acerto: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    SeqProdEntrada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorCusto: {
      type: "DOUBLE",
      allowNull: true
    },
    SeqCentroCusto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoDepartamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqProdVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqProdDevolucaoConferencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeEmb: {
      type: "DOUBLE",
      allowNull: true
    },
    codigosolicitante: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    NomeSolicitante: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'acertoestoque'
  });
};
