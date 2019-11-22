/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coi', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CategoriaMovimento: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CFOP_DentroEstado: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_ForaEstado: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_Exterior: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_SubPF_Dentro: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_SubPF_Fora: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_SubPJ_Dentro: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_SubPJ_Fora: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    AtualizaEstoque: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    GeraFinanceiro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    AtualizaCusto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    AtualizaVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Entrada_Saida: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: 'E'
    },
    SubConta_Vista: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SubConta_Prazo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descricao_Vista: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Descricao_Prazo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CFOP_Ind_Dentro: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_Ind_Fora: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_Serv_Dentro: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_Serv_Fora: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Padrao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TpLancamento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CFOP_Subs_Dentro_x10: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_Subs_Dentro_x30: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_Subs_Dentro_x60: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_Subs_Dentro_x70: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_Subs_Fora_x10: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_Subs_Fora_x30: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_Subs_Fora_x60: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_Subs_Fora_x70: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    TipoPreco: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    CFOp_Subs_Dentro_X10_PF: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOp_Subs_Dentro_X30_PF: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOp_Subs_Dentro_X60_PF: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOp_Subs_Dentro_X70_PF: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOp_Subs_Fora_X10_PF: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOp_Subs_Fora_X30_PF: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOp_Subs_Fora_X60_PF: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOp_Subs_Fora_X70_PF: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Finalidade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Gera_Valor_Dev_Negativo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Nao_Tributa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Nao_CST_ICMS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Nao_Cst_PIS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Nao_Tributa_IPI: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Cfop_Ind_Dentro_ST: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Cfop_Ind_Fora_ST: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CFOP_Saida: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Cfop_Ind_Fora_ST_PF: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Cfop_Ind_Dentro_ST_PF: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    NaturezaOperacao: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Gera_CP_Dev_Negativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    TipoMovimentacaoSaida: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '0'
    },
    AtualizaCusto_NFManual: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ObrigaPedCompra: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    TerminalExclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    UsuarioExclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataExclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BaixaEstoqueConfCega: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    RS_DividirEm3NF: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'coi'
  });
};
