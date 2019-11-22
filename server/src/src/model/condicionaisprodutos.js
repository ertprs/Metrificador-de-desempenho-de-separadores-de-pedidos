/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('condicionaisprodutos', {
    CodigoCondicional: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoBarras: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Referencia: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    UNVenda: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTabela: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorUnitario: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    Desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    Acrescimo: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoComissao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoSecao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoGrupo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoSubGrupo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoFabricante: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PesoBruto: {
      type: "DOUBLE",
      allowNull: true
    },
    PesoLiquido: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCusto: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCustoGerencial: {
      type: "DOUBLE",
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TextoObservacao: {
      type: DataTypes.STRING(170),
      allowNull: true
    },
    ValorComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cancelada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    FuncLiberou: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UserLiberou: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataLiberou: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodigoGrade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeOriginal: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeDevolvida: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    PComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    PrecoemPromocao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    BaixaComposicao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Desc_DevCond: {
      type: "DOUBLE",
      allowNull: true
    },
    DescMaximo: {
      type: "DOUBLE",
      allowNull: true
    },
    Sequencia_Origem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PrecoCadPro: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    QtdeGerada: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    QtdeUND: {
      type: "DOUBLE",
      allowNull: true
    },
    DataHoraExclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AcrescMaximo: {
      type: "DOUBLE",
      allowNull: true
    },
    pp_sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pp_perc_bonus: {
      type: "DOUBLE",
      allowNull: true
    },
    pp_bonus: {
      type: "DOUBLE",
      allowNull: true
    },
    pp_tipopromo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'condicionaisprodutos'
  });
};
