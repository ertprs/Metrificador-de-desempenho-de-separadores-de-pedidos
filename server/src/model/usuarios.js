/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoFuncionario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    UserName: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Cliente_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Cliente_edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Cliente_exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Cliente_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    MenuCadastro: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Caixa_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Caixa_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Caixa_edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Caixa_exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cidade_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cidade_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cidade_edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cidade_exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    COI_Menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    COI_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    COI_edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    COI_exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Plano_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Plano_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Plano_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Plano_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Empresa_Menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Empresa_cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Empresa_edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Empresa_exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Vendedor_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Vendedor_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Vendedor_edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Vendedor_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Secoes_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Secoes_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Secoes_edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Secoes_exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Grupos_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Grupos_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Grupos_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Grupos_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    SubGrupos_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    SubGrupos_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    SubGrupos_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    SubGrupos_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Fabricantes_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Fabricantes_cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Fabricantes_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Fabricantes_exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Servicos_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Servicos_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Servicos_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Servicos_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    LinhaComissao_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    LinhaComissao_cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    LinhaComissao_edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    LInhaComissao_exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Cadeia_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cadeia_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cadeia_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cadeia_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Bancos_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Bancos_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Bancos_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    bancos_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CategoriaObjeto_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CategoriaObjeto_cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CategoriaObjeto_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CategoriaObjeto_exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    FormaParc_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    FormaParc_cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    FormaParc_edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    FormaPArc_exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    FormaRec_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    FormaRec_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    FormaRec_edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    FormaRec_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Tabela_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Tabela_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Tabela_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Tabela_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Objetos_Menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Objetos_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Objetos_edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Objetos_exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Resultado_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Resultado_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Resultado_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Resultado_exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cfop_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cfop_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cfop_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cfop_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Sit_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Sit_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Sit_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Sit_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    MenuEstoque: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Prod_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Prod_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Prod_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Prod_exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    MenuCompras: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    PedC_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    PedC_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    PedC_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    PedC_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Entrada_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Entrada_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Entrada_edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Entrada_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    MenuFinanceiro: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CaixaP_Menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CaixaP_Mov: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CaixaP_CR: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CaixaP_CrRec: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CaixaP_CrEst: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CaixaP_CP: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CaixaP_CpRec: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CaixaP_CpEst: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Comi_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Comi_Baixar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cr_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cr_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cr_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cr_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cp_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cp_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cp_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cp_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Dica: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    User_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    User_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    User_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    User_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    User_permissao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    MenuComercial: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Vendas_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Vendas_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Vendas_exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Vendas_Imprimi: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Vendas_Duplicata: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    OS_Menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Os_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Os_editar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Os_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Os_Imprimi: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Os_Duplicata: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cond_Menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cond_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cond_editar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cond_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Cond_Imprimi: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Orc_Menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Orc_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Orc_Editar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Orc_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Orc_Imprimi: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Orc_GeraVenda: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Dev_Menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Dev_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Dev_Editar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Dev_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Dev_Imprimi: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Dev_Duplicata: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    MenuEmissao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Duplicatas_Menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    MenuGraficos: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    GrVendas_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Ramo_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Ramo_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Ramo_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Ramo_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Fluxo_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Parametros_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Prod_VerCusto: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Prod_EditCusto: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Prod_EditDescMax: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    MenuUtilitarios: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    UtAtualizar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Utbackup: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    UtRestaurarbackup: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    UtAutoBackup: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    UtLogoff: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Config_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Adm_Adm: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Adm_Ecf: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Adm_nf: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Adm_Etq: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Ecf_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Ecf_Cancelar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Ecf_Leiturax: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Ecf_ReducaoZ: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    SenhaLibDesc: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Acertoest_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Acertoest_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Acertoest_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Acertoest_imprimir: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    TransfEst_Menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    TransfEst_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    TransfEst_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    TransfEst_Imprimir: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    AjusteCusto_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    PosicaoFinanceira: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    MenuConsulta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Cons_Financeira: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    OS_AlteraVend: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    MenuRelatorio: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Rel_Vendas: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Rel_Vendasgerenc: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Rel_Financ: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Rel_Caixa: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Rel_ExtratoCliente: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Rel_CR: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Rel_CP: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Rel_Fluxo: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Rel_Cheque: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Rel_ResumoCP: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    MenuControladoria: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Control_Credito: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Control_Inativo: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Doacao_Menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Doacao_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Doacao_Editar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Doacao_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CC_Menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CC_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CC_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CC_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CC_Privadas: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    MenuPrevendas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Pre_Pedidos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Pre_GeracaoVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Pre_OP: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Pre_ConsultaOP: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Pre_Conferencia: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    MenuFaturamento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Fat_Vendas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Fat_manual: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Fat_Consulta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Fat_Nfe: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    MenuMyMobile: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Mob_Viagem: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Mob_Enviar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Mob_Receber: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Mob_Configurar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    PrePed_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    PrePed_edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    PrePed_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    PrePed_Limpeza: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    PrePed_Imprimir: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Grade_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Grade_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Grade_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Grade_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    ModalidadeCB_Menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    ModalidadeCB_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    ModalidadeCB_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    StatusOS_Menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    StatusOS_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    StatusOS_Edita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    StatusOS_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Prod_EstAviso: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Cons_SPC: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Alterado: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    Crm_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Crm_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Crm_EditaAtendimento: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Crm_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Crm_EditaOcorrencia: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Crm_VerTodos: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Prod_editVenda: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Rel_CartaoCli: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Rel_Clientes: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Mysms_Menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Mysms_Identificacao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    MySms_TextoPre: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    MySms_ConsultaSaldo: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    MySms_EnviarSms: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Cons_MySms_Todos: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Cons_MySms_Msg: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Cons_MySms: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Prod_EditPLucro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ContaAviso: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    OS_EditarF: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Logado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    User: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Senha: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Master: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: 'N'
    },
    Colecao_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Colecao_Cadastra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Colecao_Exclui: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Vendas_Editar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Rel_ContasExcluidas: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    CaixaP_Saldo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    AvisoVendaAberta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Calendario: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ChequeTerceiro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Fat_ManualE: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Rel_Produtos: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Rel_Estoque: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Rel_Compra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Rel_PreVenda: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Rel_Devolucao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Rel_OS: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Rel_Condicional: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Rel_ComAvulsa: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Rel_Escrita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Rel_Contas_Dif: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Rel_DRE: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Rel_CHPredatado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Rel_ResumoContasPendente: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Rel_Transfcaixa: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    ValeCompra_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ValeCompra_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ValeCompra_Editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ValeCompra_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ValeCompra_Baixar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ValeCompra_exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Rel_comissao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Anota_Editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Anota_Excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Cr_Anotacoes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Opcartao_cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Opcartao_edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Opcartao_exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Cotacoes_cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Cotacoes_edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Cotacoes_exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Opcartao_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Cotacoes_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    USintegra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    UReducoesECF: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    UNotasConsumidor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    UExportSiagro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    UWallpapers: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Ublog: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    UAplicativos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    UEnviarRecados: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    EscritaFiscal_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    EscritaFiscal_Contabilista: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    EscritaFiscal_Apuracao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    EscritaFiscal_SpedFiscal: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImpExp_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImpExp_importar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImpExp_Promob: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImpExp_ProdCli: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImpExp_debitos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImpExp_ListadePreco: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImpExp_Exportacoes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImpExp_SerasaRecipro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImpExp_EntreMycommerce: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImpExp_BuscaPreco: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    UExpPlanoCorte: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Cad_Convenio: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Cad_ConvenioGravar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Cad_ConvenioExcluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Mob_EnviarFutura: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Flex_LiberaPed: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Flex_ConsultaBloq: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Flex_Creditos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Flex_Verbas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Cliente_EditaCredito: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Televendas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ExibirEstoque: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Carga_Menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Carga_Adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Carga_Editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Carga_Excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Carga_Embarque: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Carga_Cortes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Carga_Faturar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Carga_Imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Carga_Devolucoes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Carga_PreAcerto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Carga_Acerto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_email: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Exportar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Carga_Devolucoes_lancar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    PrePed_Edita_Gerado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Carne_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Boleto_Menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Boleto_Emissao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Boleto_REEmissao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Boleto_Cancelar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Etq_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Etq_Prod: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Etq_ProdTermica: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Etq_PreVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Etq_Venda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Etq_NF: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Etq_Cliente: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    ContratoVenda_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cheque_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Recibo_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    OrdemEnt_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    DespServTerc_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cr_Renegocia: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CP_Renegocia: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Ecf_AbrirGaveta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Ecf_AbrirGavetaSenha: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    AltDiv_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    AltDiv_Clientes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    AltDiv_Produtos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    AltDiv_Mva: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    vendedor_historico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CaixaP_RecPag: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Inventario_Menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Inventario_Cadastro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Inventario_Exclusao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Inventario_Lancamentos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Inventario_Impressao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Inventario_Finalizar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PercentualMaxDesconto: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '100'
    },
    Control_Descontos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Orc_VerProdutos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Orc_VendaAgrupada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Dev_LancaPagamentos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    OS_EditaComissao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Rel_OrdemProducao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Rel_Orcamento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Rel_ValeCompra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Rel_BoletoEmitido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Vendas_Exclui_Super: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Prod_Inativar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Cliente_Historico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Carga_Sobras_Lancar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    AcertoEst_CadastraS: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Supervisor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    CarreTrans: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    CarreTrans_New: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    CarreTrans_Edit: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    CarreTrans_Del: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Cliente_HistoricoF: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Com_New: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Com_Del: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Com_Baixa: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Caixa_TransferenciaSaldo: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Orc_Analise: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Rel_Comissao_Bloc: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Analise_Compra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Vendas_NDias: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Pre_GeracaoSenha: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Correspondencia_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    VendedoresEMarcas_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    VendedoresERestricoes_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rotas_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MotivosDeDevolucao_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    unidadeMedidas_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Regioes_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Tributacoes_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    UExibirLogRecados: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    LogadoMyMilk: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Dev_Finalizar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    ValeCompra_SemFinanceiro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Pre_Conf_SenhaQtde: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Crm_Notify: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Visualiza_Cliente: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Cliente_Visualiza: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Visualiza_Fornecedores: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Visualiza_Transportadoras: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Cliente_FatTerc: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    User_Permissao_Empresas: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    CCFornecedor: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Fat_Unificar: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Entrega_Add: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    Entrega_Edit: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    Entrega_Del: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    PrePed_Analise: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ControladoriaCadastro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    pedc_Liberacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Crm_EditaAtendFinalizado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Permissao_Supervisores: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Cond_EditCliente: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Prod_Historico: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MenuImpressao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Imp_Imprimir: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Imp_Visualizar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Imp_Exportar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Imp_Email: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Alter_Frete: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Tabela_Frete: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Empresas_Controladoria: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    AjusteComissao_menu: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '1'
    },
    Carga_AnulacaoCorte: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Pre_Auditoria: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    ADM_Alterar_DataVendas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MenuAdm: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Verify_PedidosEcommerce: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    View_Vlr_Metas: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    Caixa_ReportView: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Flex_Verbas_Supervisor: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Flex_Verbas_All: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Cons_Rentabilidade: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    Rel_VendasAnalitico_Lucro: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    Cliente_EditaCreditoCortado: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    prod_Producao_Audita: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    cr_Renegocia_Menor: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Biometria_FIR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Biometria_TextFIR: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    Transferencia_Controladoria: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    AvisoChequeCompensar: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    Vendas_VerTotal: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    OS_AnaliseObj: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Orc_Limpeza: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Os_exclui_Super: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PrePed_MudaFormaParc: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Prod_Bloq_Fisco: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_Pedidos_Sovis: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ExlcuirPedidoSovis: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    LimpezaPedidoSovis: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Cons_Produto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Carregamento: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_PreVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Venda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Cliente: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Graficos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Graficos_Comparacoes: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Graficos_MetasVendedor: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Graficos_Inadimplencia: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_BoletoEmitido: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_BoletoCancelado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Graficos_Vendas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_caixa_ver_todos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ContaAvisoTodas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Carga_Embarque_Editar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    AlterarStatusPedidosSovis: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    Os_Finalizar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Fin_AjustePlanoContas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CC_VerSaldo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    caixaP_Transf: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Composicao_Estoque: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Vendas_VerTodos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Produtos_VerTodos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Clientes_VerTodos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Reajuste_Preco: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Alteracoes_Preco: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Adm_Boleto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Auditoria_Estoque: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    PreVendas_ReprocessarCorte: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    prod_Producao_Editar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    prod_Producao_Excluir: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    prod_Producao_Menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Vendas_Visualizar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    OS_Visualizar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cond_PermiteDevolver: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Caixa_PermiteRecParcial: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Pre_Separacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PreSep_Novo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PreSep_Editar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PreSep_Excluir: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PreSep_Separar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PreSep_Imprimir: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Rel_ProvisaoConta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_InadimplenciaCR: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Control_Descontos_Mynote: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    MostraGrafico_Historico: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Pre_GeracaoConfig: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    FingerPrint: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Rel_VendasRomaneioSeparacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Caixa_PermiteAlterarJuro: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cliente_GuiaCredito: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_VendaPDV: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    VendedoresEMarcas_menu_gravar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    VendedoresEMarcas_menu_marcar_todas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    VendedoresERestricoes_menu_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    VendedoresERestricoes_menu_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    VendedoresERestricoes_menu_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    AvisoCortes: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ExibeAvisoCortes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    prod_Producao_Mat_Editar_Qtde: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    prod_Producao_Mat_Editar_Perca: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Complementares: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_check_list: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_vendedores_metas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_veiculos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_etapas_producao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_restricoes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_restricoes_fornecedores_cidades: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_restricoes_fornecedores_cidades_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_restricoes_fornecedores_cidades_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_restricoes_fornecedores_cidades_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_restricoes_fornecedores_clientes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_restricoes_fornecedores_clientes_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_restricoes_fornecedores_clientes_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_restricoes_fornecedores_clientes_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_restricoes_vendedor_produto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_restricoes_vendedor_produto_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_restricoes_vendedor_produto_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_restricoes_vendedor_produto_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Grupos_clientes_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    medicos_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rotas_Adiciona: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rotas_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rotas_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rotas_Classifica: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rotas_Cidade: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Regioes_Adiciona: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Regioes_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Regioes_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Regioes_Rotas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MotivosDeDevolucao_Grava: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MotivosDeDevolucao_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Grupos_clientes_Adicona: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Grupos_clientes_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Grupos_clientes_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    medicos_Adiciona: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    medicos_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    medicos_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    unidadeMedidas_Adiciona: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    unidadeMedidas_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    unidadeMedidas_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_contas_receber: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_veiculos_Adiciona: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_veiculos_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_veiculos_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_etapas_producao_adiciona: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_etapas_producao_edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_etapas_producao_exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_check_list_adiciona: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_check_list_edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Complementares_check_list_exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Atualiza_valores_pdv: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Atualiza_valores_pdv_atualiza: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Atualiza_valores_pdv_etiqueta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_aniversariante: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_aniversariante_SMS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_aniversariante_exportar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_aniversariante_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_contas_receber_anotacoes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_contas_receber_inf_venda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_contas_receber_dados_cliente: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_contas_receber_baixar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_contas_receber_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_contas_pagar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_contas_pagar_fornecedor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_contas_pagar_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_contas_pagar_maos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_contas_pagar_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Pre_venda_op_despacho: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Pre_venda_op_despacho_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Pre_venda_op_despacho_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Pre_venda_op_despacho_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Pre_venda_op_despacho_pagamento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_manifesto_carga: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_manifesto_carga_novo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_manifesto_carga_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_manifesto_carga_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_manifesto_carga_manifesto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_manifesto_carga_romaneio: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_manifesto_carga_canhotos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_MDFe: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_MDFe_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_MDFe_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_MDFe_enviar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_MDFe_consultar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_MDFe_cancelar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_MDFe_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_MDFe_encerrar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_GNRE: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_GNRE_gerar_guias: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_GNRE_re_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_GNRE_cancelar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Emissao_ordem_entregava_novo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Utilitarios_tef: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Utilitarios_tef_administracao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Utilitarios_tef_cancelar_ultimo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Utilitarios_mapa_resumo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Utilitarios_NF_servico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Utilitarios_NF_servico_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Utilitarios_NF_servico_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Utilitarios_NF_servico_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Utilitarios_NF_servico_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Utilitarios_atualiza_relatorios_personalizado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Utilitarios_manutencao_tabelas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Utilitarios_historico_recados: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_producao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_producao_materia_prima: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_producao_materia_prima_pre_venda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_producao_produto_acabado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_producao_produto_acabado_pre_venda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_producao_perca_mercadoria: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_producao_perca_mercadoria_pre_venda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_producao_analise_qualidade: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_producao_ordem_despacho: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_doacoes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_CRM: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_logistica: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_central_cobrancas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_carregamentos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_carregamentos_por_motorista: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_carregamentos_por_entregador: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_carregamentos_liberacoes_separacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_comissoes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_comissoes_apuracao_entrega_produto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cond_condicional: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cond_geracao_condicional: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Comercial_conferencia_venda_balcao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_rastrearColaboradores: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_enviarFotos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_listaPrecoCalculoCorte: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_integracao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_integracao_sovisImporta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_integracao_sovisConsultarLogs: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_integracao_importaEcommerce: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_integracao_futuraImporta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_integracao_futuraRelVend: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_integracao_futuraConsLog: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_integracao_fidelize: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_integracao_ceicom: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Fat_Manual_Menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_conhecimentoFrete: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_conhecimentoFrete_saida: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_conhecimentoFrete_saida_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_conhecimentoFrete_saida_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_conhecimentoFrete_saida_cancelar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoCTe: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoCTe_abaConhecimento_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoCTe_abaConhecimento_consultar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoCTe_abaConhecimento_cancelar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoCTe_abaConhecimento_transmitir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoCTe_abaConhecimento_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoCTe_abaConhecimento_CCe: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoCTe_abaConhecimento_exportarXML: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoCTe_abaConhecimento_enviarEmail: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoCTe_abaLotesEnviados_consultar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoCTe_abaLotesEnviados_detalhes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoCTe_abaLotesEnviados_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoCTe_abaInutilizacoes_inutilizar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoCTe_abaContabilidade_gerarArquivo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_CumpomFiscal_NFCe: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_NFSeConsultar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_NFSeConsultar_consultar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_NFSeConsultar_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_NFSeConsultar_cancelar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_NFSeConsultar_enviarEmail: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_NFSeConsultar_reenviar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_divergenciaNF: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_divergenciaNF_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_manifestacaoNFe: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_manifestacaoNFe_executar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoNFCe: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoNFCe_abaNotas_enviar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoNFCe_abaNotas_consultar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoNFCe_abaNotas_cancelar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoNFCe_abaNotas_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoNFCe_abaNotas_chaveNFCe: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoNFCe_abaNotas_exportarXML: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoNFCe_abaInutilizacao_inutilizar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoNFCe_abaContabilidade_gerarArquivo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoNFCe_abaContabilidade_enviarEmail: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_listaCompras: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_consultaCortesMercadoria: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_consultaConferenciaCega: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_consultaConferenciaCega_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_consultaConferenciaCega_imprimirNota: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_consultaConferenciaCega_imprimirPedido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_consultaConferenciaCega_remover: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_consultaConferenciaCega_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_consultaConferenciaCega_comparativo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_consultaConferenciaCega_finalizar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_lancamentosFiscais: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_lancamentosFiscais_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_lancamentosFiscais_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_lancamentosFiscais_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_conhecimentoFreteRecibo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_conhecimentoFreteRecibo_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_conhecimentoFreteRecibo_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_conhecimentoFreteRecibo_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_entradaNotaFiscalServico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_entradaNotaFiscalServico_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_entradaNotaFiscalServico_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_entradaNotaFiscalServico_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Compras_entradaNotaFiscalServico_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cond_vizualizar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cond_gerarVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cond_vendasParcial: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_alteracaoListaOferta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_alteracaoListaOferta_salvar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_alteracaoListaOferta_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_campanhaPromocao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_campanhaPromocao_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_campanhaPromocao_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_campanhaPromocao_clonar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_campanhaPromocao_produtos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_campanhaPromocao_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_pacotesProdutos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_pacotesProdutos_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_pacotesProdutos_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_pacotesProdutos_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_listaSugestaoVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_listaSugestaoVenda_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_listaSugestaoVenda_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_listaSugestaoVenda_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_listaProdutosPalm: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_produtosVendaRestrita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_produtosVendaRestrita_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_produtosVendaRestrita_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_produtosVendaRestrita_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_trocasEfetuarFornecedor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_trocasEfetuarFornecedor_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_trocasEfetuarFornecedor_retorno: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_trocasEfetuarFornecedor_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_trocasEfetuarFornecedor_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_trocasEfetuarFornecedor_indenizar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_trocasEfetuarFornecedor_gerarNFe: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_exportarProdutosPesaveis: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_lotes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_tabelaProdutosPDV: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_tabelaProdutosPDV_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_tabelaProdutosPDV_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_cartoesCreditoDebito: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_cartoesCreditoDebito_baixar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_cartoesCreditoDebito_estornar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_cartoesCreditoDebito_cancelar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_cartoesCreditoDebito_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_contasReceber_enviarCobradora: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_contasReceber_enviarCobradora_enviar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_contasReceber_enviarCobradora_retirar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_contasReceber_enviarCartorio: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_contasReceber_enviarCartorio_gerar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_contasReceber_enviarCartorio_retirar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_gestaoOrcamentaria: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_gestaoOrcamentaria_orcamentoDespesa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_gestaoOrcamentaria_comparativo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_cotacaoMoedas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_centralCobranca: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_centralCobranca_email: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_centralCobranca_sms: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_centralCobranca_extrato: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_centralCobranca_detalhesDuplicatas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_centralCobranca_historico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_centralCobranca_novaAnotacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_centralCobranca_filtrar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_centralCobranca_exibir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_centralCobranca_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_cobrancas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_cobrancas_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_cobrancas_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_cobrancas_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_cobrancas_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_cobrancas_acertar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_cobrancas_despesas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_cobrancas_finalizarLote: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_eCobrador: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_eCobrador_enviar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_eCobrador_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_gerarRemessa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_gerarRemessa_gerar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_retornoBaixaTitulo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_retornoBaixaTitulo_baixar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_retornoBaixaTitulo_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_gerenciamentoRemessa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_gerenciamentoRemessa_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_gerenciamentoRemessa_detalhes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_gerenciamentoRemessa_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_custodiaCheque: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_custodiaCheque_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_custodiaCheque_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_custodiaCheque_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_custodiaCheque_gerarArquivo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_custodiaCheque_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_custodiaCheque_liquidarCheques: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_descontoBoletos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_descontoBoletos_adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_descontoBoletos_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_descontoBoletos_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_descontoBoletos_creditarLote: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_descontoBoletos_estornarBoleto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_descontoBoletos_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_conciliacaoBancaria: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_conciliacaoBancaria_atualizar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_conciliacaoBancaria_conciliar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_conciliacaoBancaria_finalizar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoFactoring: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoFactoring_arquivoRemessa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoFactoring_arquivoRemessa_gerar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoFactoring_gerenciamentoRemessa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoFactoring_gerenciamentoRemessa_imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoFactoring_gerenciamentoRemessa_detalhes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoFactoring_gerenciamentoRemessa_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_VendasResumoMensal: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_trocasEfetuarFornecedor_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    opt_exame_cadastra: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    opt_exame_exclui: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    opt_exame_edita: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    AvisoChequesCompensarVencidos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Prod_EstAviso_IntegrarEmpresas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    opt_edita_permissao: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    Crm_Contatos_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Crm_Contatos_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Crm_Contatos_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Crm_Menu_Contatos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_clientes_analiseRisco: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_clientes_relacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_clientes_serasaScpcProtesto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_clientes_fichaCadastral: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_clientes_permissaoAutorizados: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_clientes_divergencias: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_clientes_excluidos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_clientes_cidades: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Crm_Contatos_Atendimento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_analitico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_sintetico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_simplificado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Entrega_Aviso: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Vendas_RemoverProdutos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    ADM_botao_personalizar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    EscritaFiscal_EnvioXML: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cliente_GuiaFinanceiro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Pedidos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_ResumoDiario: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_DetalhamentoRecebimento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_CurvaABC: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Bonificacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Metas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Metas_PorGrupo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Metas_PorSecao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Metas_PorVendedor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Integradas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Faturadas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Canceladas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos_Cidade: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos_Clientes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos_ClientesFornecedores: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos_Grupos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos_Secao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos_SecaoGrupoSubGrupo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos_Parcelamento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos_Produtos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos_PorLinhaComissao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos_Vendedor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos_RegimeTributario: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos_TabelasPreco: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_ProdutosLote: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_RankindPontuacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Positivacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Positivacao_PorGrupo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Positivacao_PorFornecedor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_ResumoFretes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_ConferenciaVendas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_IndicacaoVendas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Prod_Cad_TabelaPreco: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    OS_AlteraStatus: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Auditoria_NCM: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    AuditoriaMenu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    AgendaProducao_Estoque: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    OS_ExcluirHistorico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_EstoqueComparativoEmpresas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_Estoque: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cons_MapResult: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_MapResult_Add: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_MapResult_Edit: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_MapResult_Del: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_Sovis_ExibirAoIniciar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    AcertoEst_AltDtLancamento: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Cliente_HistoricoT: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Vendas_AnaliseCusto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ExibeCalendarioFeriado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Faturamento_emissaoCTe_abaConhecimento_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_centralCobranca_anotacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    ADM_Alterar_DataOrcamentos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    prod_Producao_Adicionar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    prod_Producao_Visualizar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    prod_Producao_Imprimir: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    prod_Producao_FinalizarOP: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    prod_Producao_BaixaParcial: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    prod_Producao_MateriaPrima: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    prod_Producao_ImpEtiqueta: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_integracao_Pharmalink: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_integracao_Sandoz: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MenuInicializacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Avisos_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Avisos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Avisos_CompCheque: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Avisos_Contas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Avisos_Cortes: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Avisos_CRM: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Avisos_Estoque: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Avisos_ProdEnt: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Avisos_VendasAberta: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    AvisoNcmCest: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_integracao_meuspedidos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    ImpExp_ABCFarma: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    VasilhameMenu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Vasilhame_cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Vasilhame_Editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Vasilhame_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Vasilhame_Imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    acertocontas_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    OS_VerTotal: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Prod_VerEstEmpresaIntegrada: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    MB_RELATORIOS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    MB_COBRANCA: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    MB_IMPOSTORENDA: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    MB_EXTRATOCLIENTE: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    MB_RECEBIMENTOCONTABIL: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    MB_CONTASPORFORMA: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    MB_REAJUSTE: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    MB_BONIFICACAO: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    MB_CONTASPAGAS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Faturamento_emissaoNFe_OpcaoContigencia: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Faturamento_emissaoNFe_abaNotas_Enviar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Faturamento_emissaoNFe_abaNotas_Consultar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Faturamento_emissaoNFe_abaNotas_Cancelar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Faturamento_emissaoNFe_abaNotas_CCe: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Faturamento_emissaoNFe_abaNotas_ChaveNFe: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Faturamento_emissaoNFe_abaNotas_Imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Faturamento_emissaoNFe_abaNotas_Exportar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Faturamento_emissaoNFe_abaNotas_EnviarEmail: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Faturamento_emissaoNFe_abaLotes_Consultar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Faturamento_emissaoNFe_abaLotes_Detalhes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Faturamento_emissaoNFe_abaLotes_Excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Faturamento_emissaoNFe_abaInutilizacao_Inutilizar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Faturamento_emissaoNFe_abaContabilidade_GerarArquivo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Prod_Ofertas: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_emissaoNFCe_abaNotas_enviarEmail: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CodigoDepartamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    MaxCredito: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    control_desconto_financeiro: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Acertoest_AlteraLocalizacao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Pre_Conf_SenhaRecomecar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    VendaBalcao_Conf_SenhaRecomecar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    PreSeparacao_Conf_SenhaRecomecar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Rel_Produtos_Produtos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_PrecoCustoVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_MargemLucro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_Comissionados: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_Kits: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_Similares: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_Seriais: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_ListaPrecos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_ListaOfertas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_Balanca: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_ST: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_ResumoFisco: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_ResumoCompraVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_ResumoEntradaSaida: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_MaisVendidos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_MaisVendidosGrades: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_EntradasSaidasGrades: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_Movimentacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_AlteracaoPrecos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_Excluidos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_NovosAlterados: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Produtos_DivergenciaNCM: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Etiquetas: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_OrdemEntrega: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_OrdemEntrega_ProdutosEntregar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_OrdemEntrega_EntregasPDV: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Vendas_AlterarDatas: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    entrada_AuditarPagamento: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Caixa_Adiantamentos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    LocClientesTipo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Crm_AddDiagnostico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Crm_EditaDiagnostico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Crm_ExcluiDiagnostico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Cons_Avisos_ProdutosLoteValidade: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    AvisoProdutosLoteValidade: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Pre_SeparacaoKG: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Pre_SeparacaoKG_Corte: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Pre_SeparacaoKG_Imprimir: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Pre_SeparacaoKG_Gravar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cliente_FichaCadastral: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Estoque_campanhaPromocao_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    cons_calendarioentregapandolfi: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    MyMobile_IntegracaoPandolfi: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_IntegracaoPandolfi_nf: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_CurvaABC: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Rel_TransfCaixaContaCorrente: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Rel_liberacaoCredito: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    cr_Renegocia_Renegociar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    cr_Renegocia_Visualizar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    AvisoAniversariantes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Rel_Acerto_Contas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Pre_Conf_PermitirBaixarLote: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Escrita_Escrita: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Escrita_AntiMicrobianos: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    mo_colaborar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mo_cursoNR18: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mo_acaoTrabalhista: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mo_CurvaAbcModelo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mo_Modelos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mo_Inventario: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mo_movimentacoes: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mo_entradapermuta: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mo_saidapermuta: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mo_entregaacabamento: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mo_entregaCasas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mo_vendasdisponiveis: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mo_rellotes: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mo_rellotescontrato: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mo_contratospendentes: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mo_contratoscancelados: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    MyOS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Vendas_Editar_Super: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Vendas_HabilitaBotaoValeRecDupli: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ADM_Alterar_QuemIndicou: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Requisicao_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Requisicao_Adiciona: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Requisicao_Editar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Requisicao_Excluir: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Requisicao_Imprimir: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ca_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ca_adiciona: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ca_edita: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ca_exclui: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PrePed_Edita_ParcialmenteGerado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    MyMobile_Sovis_ExibirAlertaNovosRegistros: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    MB_LOGREAJUSTE: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    AnaliseFaturamentoSN: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PrePed_GeraQtdeMaior: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    Rel_PedidosCortes: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_PedidosCortesVendedor: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    TeleVendasMenu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    TeleVendasVendaPreVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Recibo_alterarData: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cond_visualizarTotais: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MotivosCancelamentoItem_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MotivosCancelamentoItem_Grava: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MotivosCancelamentoItem_Exclui: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Motivo_Canc: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    OS_ExibirAgendamento: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    Cotacoes_Notificacao: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '1'
    },
    cr_Renegocia_Transferir: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Prod_Producao_Mat_AlterarData: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    Rel_VendasComparacaoMensal: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_VendasComparacaoAnual: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_ReceitaXdespesa: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    AjusteComissao_AlteraBase: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Cons_MyTiles: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_MyTiles_Add: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_MyTiles_Edit: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_MyTiles_Excluir: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_integracao_vsIntegracoes: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    VisualizaSaldoSangriaPDV: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Sangria: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu_ZerarBanco: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu_FuncoesECF: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu_ConsultaVendasDia: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu_SincronizarDados: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu_PacotesProdutos: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu_SuprimentoCaixa: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu_SangriaCaixa: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu_AdministracaoTEF: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu_LeituraX: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu_TrocaOperador: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu_FechamentoCaixa: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu_ReducaoZ: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu_AtalhosTeclado: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu_RecargaCelular: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu_ManutencaoSangria: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    MenuPDV_Menu_Comandas: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Metas_PorVendedor_bloc: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    Prod_EstAviso_ApenasListaPreco: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    OS_Filtros: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    OS_Filtros_VisualizarAbertas: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    OS_Filtros_VisualizarFinalizadas: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    OS_Filtros_VisualizarTodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_AnaliseFaturamentoFsical: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    Dev_Editar_Senha: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    Dev_Excluir_Senha: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    Rel_GerencialPorPonto: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    PrePed_Reativar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Vendedor_EditaGuiaDadosPessoais: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    vsDash_senha: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CentroCusto_Perdas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CentroCusto_UsoConsumo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CentroCusto_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Linguagem: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    OS_EditaFechada: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Os_FecharReabrir: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    OS_Filtros_VisualizarFechadas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_CRT_MIC_DTA: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Entrada_AlterarEstoqueMinIdeal: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    MyMobile_ImportacaoCompleta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Cons_Produto_ProdutosExcluidos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Cons_MovimentosCaixa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cond_ExigeSenha: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    OS_Exige_Senha_Mod_Servicos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    OS_Exige_Senha_Mod_Produtos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Consulta_contas_pagar_anotacoes_excluir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Consulta_contas_pagar_anotacoes_editar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Consulta_contas_pagar_anotacoes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Mob_Viagem_Cadastrar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Mob_Viagem_Editar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Mob_Viagem_Excluir: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Mob_Viagem_Lancar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Mob_Viagem_NFRemessa: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Mob_Viagem_NFRetorno: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Mob_Viagem_Relatorios: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Mob_Viagem_Confrontar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Mob_Viagem_Detalhes: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Mob_Viagem_Resumo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Mob_Viagem_Romaneio: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Mob_Viagem_Retorno: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Fabricantes_submenu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Representantes_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Representantes_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Representantes_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Representantes_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Servicos_servicos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Servicos_grupos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Comissao_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    ComissaoEscalonada_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    ComissaoPontos_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    decretosFiscais_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    decretosFiscais_cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    decretosFiscais_edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    decretosFiscais_exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    TabelaICMS_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Fecop_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    DesoneracaoICMS_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    DesoneracaoICMS_novo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    DesoneracaoICMS_edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    DesoneracaoICMS_exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    BeneficioSocial_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    BeneficioSocial_novo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    BeneficioSocial_edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    BeneficioSocial_exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    DiferencaAliquota_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Difal_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Difal_grava: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    reduTributacaoMedicamentos_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    reduTributacaoMedicamentos_salva: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    situacaoTributariaPIS_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    situacaoTributariaPIS_cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    situacaoTributariaPIS_edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    situacaoTributariaPIS_exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Centro_Custo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Requisicao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_CR_Pendente: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_CR_Recebidas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_CR_Todas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_CR_Tipo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_CR_Renegociacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_CR_Conf_ContasReceber: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_CR_Auditoria: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_CP_Pendetes: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_CP_Todas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_CP_Pagas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    StatusOP_Menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    StatusOP_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    StatusOP_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    StatusOP_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CrmTipoAtendimento_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CrmTipoAtendimento_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CrmTipoAtendimento_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CrmTipoAtendimento_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CrmTipoSolicitacao_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CrmTipoSolicitacao_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CrmTipoSolicitacao_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CrmTipoSolicitacao_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CrmDepartamentos_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CrmDepartamentos_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CrmDepartamentos_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CrmDepartamentos_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Compra_Analitico: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Compra_Sintetico: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Compra_Simplificado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Compra_Resumo_Dia: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Compra_Resumo_Mensal: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Compra_Resumo_Produto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Compra_Resumo_prod_custo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Compra_SecaoGrupoSubgrupo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Compra_Entrada_prod_cortes: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Compra_Giro_Merc: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Compra_por_Fornecedor: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Compra_Demonstrativo_venda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Compra_Analise_compra: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Compra_diver_Entrada: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Compra_Conhecimento_frete: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Pedidos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Pedidos_Rom_carga: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Pedidos_Rom_Rec: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Pedidos_Rom_Caixa: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Pedidos_ObsCliente: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Pedidos_Analise_produto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Pedidos_Conf_Prod: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Relacao_Pedidos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Relacao_Pedidos_analitico: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Relacao_Pedidos_sintetico: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Relacao_Pedidos_Cancelado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Pedidos_Ajuste_Comissao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Pedidos_Comissao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Pedidos_PCP: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Pedidos_PorCidadae: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Devolucao_Analitico: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Devolucao_Sintetico: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Devolucao_Ranking: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_OSOrdem: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_OSServ: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_ServicosEmExecucao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_GrupoServico: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_ResumoOs: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    BandeiraCartao_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    BandeiraCartao_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    BandeiraCartao_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    BandeiraCartao_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Adquirintes_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Adquirintes_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Adquirintes_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Adquirintes_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cad_Seguradora: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cad_SeguradoraGrava: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cad_SeguradoraEdita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cad_SeguradoraExclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    GrupoParcelamento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    GrupoParcelamento_Grava: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    GrupoParcelamento_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    GrupoParcelamento_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CentrodeCusto_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CentrodeCusto_novo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CentrodeCusto_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CentrodeCusto_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CentrodeCusto_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CentrodeCusto_Imprimir: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CentrodeCustoComposicao_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CentrodeCustoComposicao_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CentrodeCustoComposicao_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CentrodeCustoComposicao_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Times_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Times_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Times_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Times_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CategoriasRequisicao_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CategoriasRequisicao_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CategoriasRequisicao_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CategoriasRequisicao_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PosicaoEstoque_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PosicaoEstoquePrateleira_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PosicaoEstoquePrateleira_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PosicaoEstoquePrateleira_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PosicaoEstoquePrateleira_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PosicaoEstoqueGondola_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PosicaoEstoqueGondola_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PosicaoEstoqueGondola_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PosicaoEstoqueGondola_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PosicaoEstoqueGaveta_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PosicaoEstoqueGaveta_Cadastra: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PosicaoEstoqueGaveta_Edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    PosicaoEstoqueGaveta_Exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    cad_crmMenu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MotivosDePerda_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MotivosDePerda_Grava: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MotivosdePerda_edita: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MotivosDePerda_Exclui: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    TabelaPontuacao_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CampanhaPromocional_menu: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CampanhaPromocional_adiciona: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CampanhaPromocional_edita: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CampanhaPromocional_exclui: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_producao_renda_merc_prevenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_producao_renda_mercadoria: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Relatorios_carregamentos_vendas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_clientes_analiseRisco_Det: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_clientes_credito: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_ForcaVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos_PorCusto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos_Produtos_MargemLucro: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos_Mensal_SecaoGrupoSubGrupo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Resumos_Fornecedor: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_ComDesconto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Vendas_Peso: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_EstoqueAcertoEstoque: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_EstoqueCentroCusto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_EstoquePosicao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_EstoquePosicao_Sint: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_EstoqueConferencia: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_EstoqueDivergencia: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_EstoqueInventario: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_EstoquePerdaVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_EstoqueBaixoMinimo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_EstoqueProvisao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_EstoqueFisico: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Fidelidade_menu: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    Comanda_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelEnvioEmail: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    RelEscrita: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Saidas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelEscRegS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_ResumoNFForma: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_ResimoCFOPCST: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_ResumoDiarioAvistaAprazo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_ResumodeFaturamento: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_ResumoPorNCM: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_ProdutosFaturados: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RankingdeProdutos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_Entradas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelEscRegE: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelatoriodeFunRural: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelFuncoCapital: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelacaoProdutosPrimarios: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelacaodeNFe: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelacaoNFE_CfopPadrao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelacaoNFTransportadora: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelacaoNFC: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelacaoCTeporMotorista: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelatorioRelacaoCTE: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_relacaoNFSe: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelacaoSAT: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_ApuracaoICMS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_ApuracaodeICMS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_ApuracaodeICMSST: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_ApuracaoICMSSTTransferencias: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RecuperacaoICMS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RecSTParana: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_ApuracaoICMSSubstitutosTributarios: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_AnaliseparaRecuperacaodeICMS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_PIS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelEscRegST: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelEscRegSTS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelEsc_Sai_RegPisDet: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelEsc_Ent_RegST: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelEsc_Ent_RegSTS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelEsc_Ent_RegPisDet: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_ApuracaodePIS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_EntradaSaidaPISCofins: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelatorioIPI: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelApuracaoIPI: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    ID_RelatotiooIPI: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelEscrita_AntiMicrobianos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelEscritaISSQN: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelatoriooIPI: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Rel_RelatotiooIPI: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    CNAE_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    CNAE_Seleciona: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    CNAE_Edita: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    CNAE_Excluir: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    CNAE_Novo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    NCM_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    cadastroNCM_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    cadastroNCM_novo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    cadastroNCM_edita: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    cadastroNCM_excluir: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    resolucaoCGSN_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    resolucaoCGSN_ativar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    processosJudiciais_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    processosJudiciais_salva: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    CalendarioFeriados: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    AltDiv_Servicos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    MenuUsuarios: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    AlteracaoSenha_Menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    alteracaoSenha_gravar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    personalizacao_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    personalizacao_gravar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    gridsPersonalizados_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    gridsPersonalizados_excluir: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    alternarEmpresa_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_AnunciosMercadoLivre: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_EtiquetaEletronica: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_EtiquetaEletronicaExportar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Pre_GeracaoImpressao: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    VerificaRevacinas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Rel_Produtos_CadastroProdutos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    caixaP_CrAnot: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    UEnviarRecados_Excluir: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Inventario_Tipo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Inventario_TipoCompleto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Inventario_TipoEstoqueAtual: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Inventario_TipoParcial: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    FiltroMovimentacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Estoque_alteracaoTabelaIndividual: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_alteracaoTabelaIndividual_salvar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_alteracaoTabelaIndividual_importar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    CalendarioEntregas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_ClienteEstatistica: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Cons_ClienteAlteracoes: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_ClienteRankingPontuacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_ClienteGerenciadorCredito: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Positivacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_VendaDetalhe: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Produto_HistoricoMovimentacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Produto_Movimentacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Produto_ComparativoEstoque: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Produto_RastreabilidadeSerial: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Produto_RastreabilidadeLotes: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Produto_RastreabilidadeProdutos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Produto_AuditoriaCega: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_SPCAvulso: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_SPCInclusao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_SPCConsulta: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cons_SPCRegistroCancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cons_SPCRegistroDebito: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cons_SPCLogConsulta: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Cons_Avisos_OrdemServico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    pedc_menuCompras: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    pedc_menuFinanceiro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    cr_menuCadastroAvulso: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    cr_Bonificacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    cr_ReimpressaoRecibo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    cr_AuditoriaDuplicatas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    cp_CadastroAvulso: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_gerenciamentoRetorno: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Financeiro_integracaoBancaria_FolhaPagamento: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cond_LogCondicional: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Dev_VendasOS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Locacao_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MenuAjusteCustoComissao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_Promocao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_PromocaoAdicionar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_PromocaoEditar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_PromocaoExcluir: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_PromocaoClonar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_PromocaoImprimir: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Estoque_PromocaoResultados: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MenuEstoquePromocao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    AvisoClienteSemCompra: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    cr_Renegocia_Alterar_Valores: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    prevenda_avisoseparados: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    RecalcularComissao_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MenuBroker: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MenuBrokerDespacho: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MenuBrokerRedespacho: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Lancamento_CRT_MIC_DTA: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Consulta_CRT_MIC_DTA: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Faturamento_SatCFe: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_integracao_IMS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MenuDeclaracaoQuitacaoDebitos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MyMobile_integracao_SandozLog: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    EnviarSMS_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    EscritaFiscal_FCI: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    EscritaFiscal_FCIRemessa: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    EscritaFiscal_FCIRetorno: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    EscritaFiscal_SpedPlanoContas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    EscritaFiscal_SpedContasAnaliticas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    prevenda_avisoseparados_tempo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ImpExp_SelfColor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ImpExp_SelfColor_Importacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ImpExp_SelfColor_Produtos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ImpExp_SelfColor_Colorantes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Vendas_SelfColor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    EscritaFiscal_UnificarEFDContribuicoes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    EscritaFiscal_SpedFiscalEstoqueEscriturado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    EscritaFiscal_EFDContribuicoes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    Crm_menu_emailSMS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    AvisoNFCPendente: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'usuarios'
  });
};
