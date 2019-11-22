/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelas', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Descricao: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Percentual: {
      type: "DOUBLE",
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Considera_Promocao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    TP_Preco: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Padrao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Optante: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Empresas: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DescMaximo: {
      type: "DOUBLE",
      allowNull: true
    },
    TipoAtu_Individual: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TaxaAtu_Individual: {
      type: "DOUBLE",
      allowNull: true
    },
    Atualiza_Individual: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    OrdemFutura: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Atu_Individual_Empresa: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    SomaIPI: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: 'N'
    },
    Recalcula_Promocao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    ExibeTab: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    DescontaSt: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Cancelada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Calc_Simples_campoDIF: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    DescontoNF: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    UltimaAlteracaoCad: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DescontoPadrao: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    TpComissao: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: 'G'
    },
    TaxaDesc_Individual: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    PercentualServico: {
      type: "DOUBLE",
      allowNull: true
    },
    RegraBS_CalculoST: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    NaoUsaDescontoImposto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'tabelas'
  });
};
