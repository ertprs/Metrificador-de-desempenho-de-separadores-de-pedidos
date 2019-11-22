/* jshint indent: 2 */


const { Model, DataTypes } = require('sequelize');

class produtos extends Model {
    static init(sequelize) {
        super.init({ 
          Codigo: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          CodigoBarras: {
            type: DataTypes.STRING(14),
            allowNull: true
          },
          Referencia: {
            type: DataTypes.STRING(30),
            allowNull: true
          },
          DataCadastro: {
            type: DataTypes.DATEONLY,
            allowNull: true
          },
          UltimaAlteracao: {
            type: DataTypes.DATE,
            allowNull: true
          },
          Descricao: {
            type: DataTypes.STRING(120),
            allowNull: true
          },
          CodigoFabricante: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: '0'
          },
          Fabricante: {
            type: DataTypes.STRING(30),
            allowNull: true
          },
          Detalhamento: {
            type: DataTypes.STRING(250),
            allowNull: true
          },
          UNVenda: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          UNCompra: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          QuantidadeCX: {
            type: "DOUBLE",
            allowNull: true
          },
          EstoqueMinimo: {
            type: "DOUBLE",
            allowNull: true
          },
          EstoqueIdeal: {
            type: "DOUBLE",
            allowNull: true
          },
          ValorCusto: {
            type: "DOUBLE",
            allowNull: true
          },
          OutrosCustos: {
            type: "DOUBLE",
            allowNull: true
          },
          CustoFinal: {
            type: "DOUBLE",
            allowNull: true
          },
          PercentualT1: {
            type: "DOUBLE",
            allowNull: true
          },
          VendaT1: {
            type: "DOUBLE",
            allowNull: true
          },
          Moeda: {
            type: DataTypes.STRING(2),
            allowNull: true
          },
          Indexador: {
            type: "DOUBLE",
            allowNull: true
          },
          CodigoCadeiaPreco: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          CadeiaPreco: {
            type: DataTypes.STRING(75),
            allowNull: true
          },
          CodigoComissao: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          TComissao: {
            type: DataTypes.STRING(30),
            allowNull: true
          },
          CodigoSecao: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          Secao: {
            type: DataTypes.STRING(30),
            allowNull: true
          },
          CodigoGrupo: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          Grupo: {
            type: DataTypes.STRING(30),
            allowNull: true
          },
          CodigoSubGrupo: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          SubGrupo: {
            type: DataTypes.STRING(30),
            allowNull: true
          },
          Parteleira: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
          Gondula: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
          Gaveta: {
            type: DataTypes.STRING(50),
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
          Medidas: {
            type: DataTypes.STRING(45),
            allowNull: true
          },
          PrazoValidade: {
            type: DataTypes.STRING(15),
            allowNull: true
          },
          PrazoGarantia: {
            type: DataTypes.STRING(15),
            allowNull: true
          },
          ObservaVenda: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true
          },
          TextoObserva: {
            type: DataTypes.STRING(170),
            allowNull: true
          },
          EnviaBalanca: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true
          },
          EtiquetaGondula: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true
          },
          CodigoCF: {
            type: DataTypes.STRING(4),
            allowNull: true
          },
          SituacaoTributaria: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
          CodigoContaContabil: {
            type: DataTypes.INTEGER(11),
            allowNull: true
          },
          ContaContabil: {
            type: DataTypes.STRING(45),
            allowNull: true
          },
          IPI: {
            type: "DOUBLE",
            allowNull: true
          },
          CNN: {
            type: DataTypes.STRING(25),
            allowNull: true
          },
          AliquotaICMS: {
            type: "DOUBLE",
            allowNull: true
          },
          BaseCalculoICMS: {
            type: "DOUBLE",
            allowNull: true
          },
          Status: {
            type: DataTypes.STRING(1),
            allowNull: true
          },
          NComercializavel: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true,
            defaultValue: '0'
          },
          DadosTecnicos: {
            type: DataTypes.STRING(8000),
            allowNull: true
          },
          Ativo: {
            type: DataTypes.INTEGER(1),
            allowNull: true
          },
          Terminal: {
            type: DataTypes.STRING(45),
            allowNull: true
          },
          Usuario: {
            type: DataTypes.STRING(45),
            allowNull: true
          },
          DescontoMaximo: {
            type: "DOUBLE",
            allowNull: true
          },
          CodigoFabrica: {
            type: DataTypes.STRING(25),
            allowNull: true
          },
          ModalidadeControle: {
            type: DataTypes.STRING(10),
            allowNull: true
          },
          CodigoGrade: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          VendaPDV: {
            type: "DOUBLE",
            allowNull: true
          },
          Cofins: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true
          },
          TipoProduto: {
            type: DataTypes.STRING(25),
            allowNull: true
          },
          AgrupaProdEtq: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          QtdePorVol: {
            type: "DOUBLE",
            allowNull: true
          },
          ExpDescricao: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true
          },
          PrecodeMercado: {
            type: "DOUBLE",
            allowNull: true
          },
          Formacao_pComissao: {
            type: "DOUBLE",
            allowNull: true
          },
          Formacao_pFrete: {
            type: "DOUBLE",
            allowNull: true
          },
          Formacao_pDespesas: {
            type: "DOUBLE",
            allowNull: true
          },
          AliquotaIcmsCompra: {
            type: "DOUBLE",
            allowNull: true
          },
          TeclaBalanca: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          empresas: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
          KitEditavel: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true
          },
          ListaPreco: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true
          },
          UserID: {
            type: DataTypes.STRING(15),
            allowNull: true
          },
          QtdeFixaEtq: {
            type: "DOUBLE",
            allowNull: true
          },
          Cancelado: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true
          },
          DataPromocao: {
            type: DataTypes.DATEONLY,
            allowNull: true
          },
          ValorPromocao: {
            type: "DOUBLE(11,2)",
            allowNull: true
          },
          QtdeMin_Promocao: {
            type: "DOUBLE",
            allowNull: true
          },
          FC_Desc1: {
            type: "DOUBLE",
            allowNull: true
          },
          FC_Desc2: {
            type: "DOUBLE",
            allowNull: true
          },
          FC_Desc3: {
            type: "DOUBLE",
            allowNull: true
          },
          FC_IPI: {
            type: "DOUBLE",
            allowNull: true
          },
          FC_FRETE: {
            type: "DOUBLE",
            allowNull: true
          },
          FC_CustoInicial: {
            type: "DOUBLE",
            allowNull: true
          },
          BaixaComposicao: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true
          },
          PFrete_UtlCompra: {
            type: "DOUBLE",
            allowNull: true
          },
          Volume: {
            type: "DOUBLE",
            allowNull: true
          },
          UnVolume: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          PrecoMaxCons_Med: {
            type: "DOUBLE",
            allowNull: true
          },
          NCM: {
            type: DataTypes.STRING(10),
            allowNull: true
          },
          Promo_Desc1: {
            type: "DOUBLE",
            allowNull: true
          },
          Promo_Desc2: {
            type: "DOUBLE",
            allowNull: true
          },
          Promo_Desc3: {
            type: "DOUBLE",
            allowNull: true
          },
          TPMedicamento: {
            type: DataTypes.STRING(45),
            allowNull: true
          },
          Cst_Compra: {
            type: DataTypes.STRING(4),
            allowNull: true
          },
          Flex_vlrGanhar: {
            type: "DOUBLE",
            allowNull: true
          },
          UsuarioExclusao: {
            type: DataTypes.STRING(25),
            allowNull: true
          },
          TerminalExclusao: {
            type: DataTypes.STRING(25),
            allowNull: true
          },
          MotivoExclusao: {
            type: DataTypes.STRING(200),
            allowNull: true
          },
          DataHoraExclusao: {
            type: DataTypes.DATE,
            allowNull: true
          },
          CodigoColecao: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          Colecao: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
          Pontuacao: {
            type: "DOUBLE",
            allowNull: true
          },
          ValorCustoFiscal: {
            type: "DOUBLE",
            allowNull: true
          },
          Medicamento_UsoControlado: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true
          },
          Largura: {
            type: "DOUBLE",
            allowNull: true
          },
          Comprimento: {
            type: "DOUBLE",
            allowNull: true
          },
          Altura: {
            type: "DOUBLE",
            allowNull: true
          },
          NumDecretos: {
            type: DataTypes.STRING(45),
            allowNull: true
          },
          QtdeCxVenda: {
            type: "DOUBLE",
            allowNull: true
          },
          Paletizado: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true
          },
          Ex_NPalete: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          CST_Simples: {
            type: DataTypes.STRING(4),
            allowNull: true
          },
          Cst_Simples_Texto: {
            type: DataTypes.STRING(45),
            allowNull: true
          },
          Venda_Med_2dia: {
            type: "DOUBLE",
            allowNull: true
          },
          UltimaCompra: {
            type: DataTypes.DATEONLY,
            allowNull: true
          },
          QtdeUltimaCompra: {
            type: "DOUBLE",
            allowNull: true
          },
          TPListaMed: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true
          },
          Restricao_CPF: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true
          },
          Restricao_QtdeLimitada: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true
          },
          Restricao_Qtde: {
            type: "DOUBLE",
            allowNull: true
          },
          limitevendas: {
            type: "DOUBLE",
            allowNull: true
          },
          limiteacrescimo: {
            type: "DOUBLE",
            allowNull: true
          },
          FatorCadeia: {
            type: "DOUBLE",
            allowNull: true
          },
          UltimaEntrada: {
            type: DataTypes.DATEONLY,
            allowNull: true
          },
          ICMS_Garantido: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true
          },
          EANTrib: {
            type: DataTypes.STRING(15),
            allowNull: true
          },
          Controlado_Civil: {
            type: DataTypes.INTEGER(3).UNSIGNED,
            allowNull: true
          },
          CST_PIS: {
            type: DataTypes.STRING(2),
            allowNull: true
          },
          Aliq_PIS: {
            type: "DOUBLE",
            allowNull: true
          },
          CST_COFINS: {
            type: DataTypes.STRING(2),
            allowNull: true
          },
          Aliq_COFINS: {
            type: "DOUBLE",
            allowNull: true
          },
          Entrada_CST_Pis: {
            type: DataTypes.STRING(2),
            allowNull: true
          },
          Entrada_CST_Cofins: {
            type: DataTypes.STRING(2),
            allowNull: true
          },
          Venda_med_10Dias: {
            type: "DOUBLE",
            allowNull: true
          },
          UltimoFornecedor: {
            type: DataTypes.STRING(100),
            allowNull: true
          },
          DataCortePDA: {
            type: DataTypes.DATEONLY,
            allowNull: true
          },
          PesoTara: {
            type: "DOUBLE",
            allowNull: true
          },
          Cst_Pis_Simples: {
            type: DataTypes.STRING(2),
            allowNull: true
          },
          Aliq_Pis_Simples: {
            type: "DOUBLE",
            allowNull: true
          },
          Cst_Cofins_Simples: {
            type: DataTypes.STRING(2),
            allowNull: true
          },
          Aliq_Cofins_Simples: {
            type: "DOUBLE",
            allowNull: true
          },
          Cst_Pis_LP: {
            type: DataTypes.STRING(2),
            allowNull: true
          },
          Aliq_Pis_LP: {
            type: "DOUBLE",
            allowNull: true
          },
          Cst_Cofins_LP: {
            type: DataTypes.STRING(2),
            allowNull: true
          },
          Aliq_Cofins_LP: {
            type: "DOUBLE",
            allowNull: true
          },
          CodNaturezaPis: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          Margem_Fixa: {
            type: "DOUBLE",
            allowNull: true
          },
          FC_Desc4: {
            type: "DOUBLE",
            allowNull: true,
            defaultValue: '0'
          },
          FC_ST: {
            type: "DOUBLE",
            allowNull: true,
            defaultValue: '0'
          },
          FC_Vendor: {
            type: "DOUBLE",
            allowNull: true,
            defaultValue: '0'
          },
          Usa_Preco_Max_ST: {
            type: DataTypes.INTEGER(3).UNSIGNED,
            allowNull: false,
            defaultValue: '1'
          },
          Ignora_Mov_Composicao: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true
          },
          CodigoANP: {
            type: DataTypes.STRING(15),
            allowNull: true
          },
          VolumeML: {
            type: "DOUBLE",
            allowNull: true
          },
          ICMSST_UltimaCompra: {
            type: "DOUBLE",
            allowNull: true
          },
          ST_PercentualRecuperar: {
            type: "DOUBLE",
            allowNull: true
          },
          DataInicioPromocao: {
            type: DataTypes.DATEONLY,
            allowNull: true
          },
          Resp_Formula: {
            type: DataTypes.STRING(45),
            allowNull: true
          },
          Resp_Qualidade: {
            type: DataTypes.STRING(45),
            allowNull: true
          },
          Fraciona: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            defaultValue: '1'
          },
          Cst_IPI_Simples: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          CSt_IPI: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          FCI_Valor_Saida_Inter: {
            type: "DOUBLE(11,2)",
            allowNull: true
          },
          FCI_Valor_Importado: {
            type: "DOUBLE(11,2)",
            allowNull: true
          },
          FCI_pCI: {
            type: "DOUBLE(11,2)",
            allowNull: true
          },
          FCI_Numero: {
            type: DataTypes.STRING(40),
            allowNull: true
          },
          FCI_DataAlteracao: {
            type: DataTypes.DATE,
            allowNull: true
          },
          FCI_DataRegistro_Sefaz: {
            type: DataTypes.DATE,
            allowNull: true
          },
          FCI_DataGeracao: {
            type: DataTypes.DATE,
            allowNull: true
          },
          FCI_Protocolo: {
            type: DataTypes.STRING(11),
            allowNull: true
          },
          Controlado_Ibama: {
            type: DataTypes.INTEGER(1),
            allowNull: true
          },
          ListaPreco2: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          Venda_Med_10Dias2: {
            type: "DOUBLE",
            allowNull: true
          },
          Recalcula_Custo_Composicao: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            defaultValue: '0'
          },
          BaseST_Retido: {
            type: "DOUBLE(11,2)",
            allowNull: true
          },
          Fc_Outros: {
            type: "DOUBLE",
            allowNull: true,
            defaultValue: '0'
          },
          Icms_SemRed_SN: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            defaultValue: '0'
          },
          EXTIPI: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          CodigoLinhaProduto: {
            type: DataTypes.INTEGER(11),
            allowNull: true
          },
          LinhaProduto: {
            type: DataTypes.STRING(100),
            allowNull: true
          },
          EANEmbCompra: {
            type: DataTypes.STRING(14),
            allowNull: true
          },
          DadosTecnicosEtiquetas: {
            type: DataTypes.STRING(8000),
            allowNull: true
          },
          Formacao_PIcmsST: {
            type: "DOUBLE",
            allowNull: true
          },
          TecladoBalanca: {
            type: DataTypes.STRING(2),
            allowNull: true
          },
          CodigoEnqIPI: {
            type: DataTypes.INTEGER(11),
            allowNull: true
          },
          AdicionalGelado: {
            type: "DOUBLE",
            allowNull: true,
            defaultValue: '0'
          },
          OutrasDespesas_UltimaCompra: {
            type: "DOUBLE(11,3)",
            allowNull: true
          },
          ValorIpi_UltimaCompra: {
            type: "DOUBLE(11,3)",
            allowNull: true
          },
          ValorSeguro_UltimaCompra: {
            type: "DOUBLE(11,3)",
            allowNull: true
          },
          Cest: {
            type: DataTypes.STRING(7),
            allowNull: true
          },
          Controlado: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: true,
            defaultValue: '0'
          },
          ceicom_exportado: {
            type: DataTypes.INTEGER(1),
            allowNull: true
          },
          magento_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          SemComissao: {
            type: DataTypes.INTEGER(1),
            allowNull: true
          },
          FORMACAO_pEmbalagem: {
            type: "DOUBLE",
            allowNull: true,
            defaultValue: '0'
          },
          CodigoVasilhame: {
            type: DataTypes.INTEGER(11),
            allowNull: true
          },
          QuantidadeVasilhame: {
            type: "DOUBLE",
            allowNull: true
          },
          POutros: {
            type: "DOUBLE",
            allowNull: true,
            defaultValue: '0'
          },
          SeparaPorEmpresa: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            defaultValue: '0'
          },
          TipoAtu: {
            type: DataTypes.STRING(1),
            allowNull: true
          },
          SeqAtu: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          InfNutri_Qtde: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Perc_Qtde: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_ValorEnergetico: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Perc_ValorEnergetico: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Carboidratos: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Perc_Carboidratos: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Proteinas: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Perc_Proteinas: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_GordurasTotais: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Perc_GordurasTotais: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_GordurasSat: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Perc_GordurasSat: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Colesterol: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Perc_Colesterol: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_FibraAlimentar: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Perc_FibraAlimentar: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Calcio: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Perc_Calcio: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Ferro: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Perc_Ferro: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Ingredientes: {
            type: DataTypes.STRING(840),
            allowNull: true
          },
          InfNutri_Observacao: {
            type: DataTypes.STRING(250),
            allowNull: true
          },
          InfNutri_UM_Qtde: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          InfNutri_UM_ValorEnergetico: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          InfNutri_UM_Carboidratos: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          InfNutri_UM_Proteinas: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          InfNutri_UM_GordurasTotais: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          InfNutri_UM_GordurasSat: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          InfNutri_UM_Colesterol: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          InfNutri_UM_FibraAlimentar: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          InfNutri_UM_Calcio: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          InfNutri_UM_Ferro: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          Anvisa: {
            type: DataTypes.STRING(20),
            allowNull: true
          },
          InfNutri_GordurasTrans: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Perc_GordurasTrans: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_UM_GordurasTrans: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          InfNutri_Sodio: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_Perc_Sodio: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_UM_Sodio: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          InfNutri_DescricaoPorcao: {
            type: DataTypes.STRING(45),
            allowNull: true
          },
          InfNutri_QuantidadeCaseira: {
            type: "DOUBLE",
            allowNull: true
          },
          InfNutri_QuantidadeCaseira_UM: {
            type: DataTypes.STRING(25),
            allowNull: true
          },
          UnTrib: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          TextoObservaEntradas: {
            type: DataTypes.STRING(170),
            allowNull: true
          },
          ExibeMyAcougue: {
            type: DataTypes.INTEGER(4),
            allowNull: true,
            defaultValue: '0'
          },
          IDPrateleira: {
            type: DataTypes.INTEGER(11),
            allowNull: true
          },
          IDGondola: {
            type: DataTypes.INTEGER(11),
            allowNull: true
          },
          IDGaveta: {
            type: DataTypes.INTEGER(11),
            allowNull: true
          },
          ValorUnUltimaCompra: {
            type: "DOUBLE",
            allowNull: true
          },
          CodigoGradeKit: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          ObservaEntradas: {
            type: DataTypes.INTEGER(4),
            allowNull: true,
            defaultValue: '0'
          },
          Gas_pGLP: {
            type: "DOUBLE(11,2)",
            allowNull: true
          },
          Gas_pGNn: {
            type: "DOUBLE(11,2)",
            allowNull: true
          },
          Gas_pGNi: {
            type: "DOUBLE(11,2)",
            allowNull: true
          },
          Gas_vPart: {
            type: "DOUBLE(11,4)",
            allowNull: true
          },
          TipoExibicaoMyAcougue: {
            type: DataTypes.INTEGER(6),
            allowNull: true,
            defaultValue: '0'
          },
          FORMACAO_vEmbalagem: {
            type: "DOUBLE",
            allowNull: true,
            defaultValue: '0'
          },
          DataUltimaEtiqueta: {
            type: DataTypes.DATE,
            allowNull: true
          },
          Multiplo: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          pICMSEfet: {
            type: "DOUBLE(11,2)",
            allowNull: true
          },
          Cst_IPI_Compra: {
            type: DataTypes.STRING(2),
            allowNull: true
          },
          FcpST_Retido: {
            type: "DOUBLE(11,2)",
            allowNull: true,
            defaultValue: '0.00'
          },
          pFcpST_Retido: {
            type: "DOUBLE(11,2)",
            allowNull: true,
            defaultValue: '0.00'
          },
          ICMS_UltimaCompra: {
            type: "DOUBLE(11,2)",
            allowNull: true
          },
          pBCEfet: {
            type: "DOUBLE(11,3)",
            allowNull: true
          },
          ValorFabricaMedicamento: {
            type: "DOUBLE",
            allowNull: true
          },
          Tela: {
            type: DataTypes.STRING(45),
            allowNull: true
          }
          
             
        }, {
            sequelize,
            tableName: 'produtos',
            timestamps: false
        })
    }
}

module.exports = produtos;


/* module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoBarras: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Referencia: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DataCadastro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    UltimaAlteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    CodigoFabricante: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    Fabricante: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Detalhamento: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    UNVenda: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    UNCompra: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    QuantidadeCX: {
      type: "DOUBLE",
      allowNull: true
    },
    EstoqueMinimo: {
      type: "DOUBLE",
      allowNull: true
    },
    EstoqueIdeal: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCusto: {
      type: "DOUBLE",
      allowNull: true
    },
    OutrosCustos: {
      type: "DOUBLE",
      allowNull: true
    },
    CustoFinal: {
      type: "DOUBLE",
      allowNull: true
    },
    PercentualT1: {
      type: "DOUBLE",
      allowNull: true
    },
    VendaT1: {
      type: "DOUBLE",
      allowNull: true
    },
    Moeda: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Indexador: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoCadeiaPreco: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CadeiaPreco: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    CodigoComissao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TComissao: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CodigoSecao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Secao: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CodigoGrupo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Grupo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CodigoSubGrupo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SubGrupo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Parteleira: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Gondula: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Gaveta: {
      type: DataTypes.STRING(50),
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
    Medidas: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PrazoValidade: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PrazoGarantia: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ObservaVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TextoObserva: {
      type: DataTypes.STRING(170),
      allowNull: true
    },
    EnviaBalanca: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    EtiquetaGondula: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CodigoCF: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SituacaoTributaria: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoContaContabil: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ContaContabil: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    IPI: {
      type: "DOUBLE",
      allowNull: true
    },
    CNN: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    AliquotaICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseCalculoICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NComercializavel: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    DadosTecnicos: {
      type: DataTypes.STRING(8000),
      allowNull: true
    },
    Ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DescontoMaximo: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoFabrica: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ModalidadeControle: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CodigoGrade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    VendaPDV: {
      type: "DOUBLE",
      allowNull: true
    },
    Cofins: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TipoProduto: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    AgrupaProdEtq: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdePorVol: {
      type: "DOUBLE",
      allowNull: true
    },
    ExpDescricao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    PrecodeMercado: {
      type: "DOUBLE",
      allowNull: true
    },
    Formacao_pComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    Formacao_pFrete: {
      type: "DOUBLE",
      allowNull: true
    },
    Formacao_pDespesas: {
      type: "DOUBLE",
      allowNull: true
    },
    AliquotaIcmsCompra: {
      type: "DOUBLE",
      allowNull: true
    },
    TeclaBalanca: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    empresas: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    KitEditavel: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ListaPreco: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    UserID: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    QtdeFixaEtq: {
      type: "DOUBLE",
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DataPromocao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ValorPromocao: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    QtdeMin_Promocao: {
      type: "DOUBLE",
      allowNull: true
    },
    FC_Desc1: {
      type: "DOUBLE",
      allowNull: true
    },
    FC_Desc2: {
      type: "DOUBLE",
      allowNull: true
    },
    FC_Desc3: {
      type: "DOUBLE",
      allowNull: true
    },
    FC_IPI: {
      type: "DOUBLE",
      allowNull: true
    },
    FC_FRETE: {
      type: "DOUBLE",
      allowNull: true
    },
    FC_CustoInicial: {
      type: "DOUBLE",
      allowNull: true
    },
    BaixaComposicao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    PFrete_UtlCompra: {
      type: "DOUBLE",
      allowNull: true
    },
    Volume: {
      type: "DOUBLE",
      allowNull: true
    },
    UnVolume: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PrecoMaxCons_Med: {
      type: "DOUBLE",
      allowNull: true
    },
    NCM: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Promo_Desc1: {
      type: "DOUBLE",
      allowNull: true
    },
    Promo_Desc2: {
      type: "DOUBLE",
      allowNull: true
    },
    Promo_Desc3: {
      type: "DOUBLE",
      allowNull: true
    },
    TPMedicamento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Cst_Compra: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Flex_vlrGanhar: {
      type: "DOUBLE",
      allowNull: true
    },
    UsuarioExclusao: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    TerminalExclusao: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MotivoExclusao: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DataHoraExclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodigoColecao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Colecao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Pontuacao: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCustoFiscal: {
      type: "DOUBLE",
      allowNull: true
    },
    Medicamento_UsoControlado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Largura: {
      type: "DOUBLE",
      allowNull: true
    },
    Comprimento: {
      type: "DOUBLE",
      allowNull: true
    },
    Altura: {
      type: "DOUBLE",
      allowNull: true
    },
    NumDecretos: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    QtdeCxVenda: {
      type: "DOUBLE",
      allowNull: true
    },
    Paletizado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Ex_NPalete: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CST_Simples: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Cst_Simples_Texto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Venda_Med_2dia: {
      type: "DOUBLE",
      allowNull: true
    },
    UltimaCompra: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    QtdeUltimaCompra: {
      type: "DOUBLE",
      allowNull: true
    },
    TPListaMed: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Restricao_CPF: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Restricao_QtdeLimitada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Restricao_Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    limitevendas: {
      type: "DOUBLE",
      allowNull: true
    },
    limiteacrescimo: {
      type: "DOUBLE",
      allowNull: true
    },
    FatorCadeia: {
      type: "DOUBLE",
      allowNull: true
    },
    UltimaEntrada: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ICMS_Garantido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    EANTrib: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Controlado_Civil: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    CST_PIS: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Aliq_PIS: {
      type: "DOUBLE",
      allowNull: true
    },
    CST_COFINS: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Aliq_COFINS: {
      type: "DOUBLE",
      allowNull: true
    },
    Entrada_CST_Pis: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Entrada_CST_Cofins: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Venda_med_10Dias: {
      type: "DOUBLE",
      allowNull: true
    },
    UltimoFornecedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DataCortePDA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PesoTara: {
      type: "DOUBLE",
      allowNull: true
    },
    Cst_Pis_Simples: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Aliq_Pis_Simples: {
      type: "DOUBLE",
      allowNull: true
    },
    Cst_Cofins_Simples: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Aliq_Cofins_Simples: {
      type: "DOUBLE",
      allowNull: true
    },
    Cst_Pis_LP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Aliq_Pis_LP: {
      type: "DOUBLE",
      allowNull: true
    },
    Cst_Cofins_LP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Aliq_Cofins_LP: {
      type: "DOUBLE",
      allowNull: true
    },
    CodNaturezaPis: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Margem_Fixa: {
      type: "DOUBLE",
      allowNull: true
    },
    FC_Desc4: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    FC_ST: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    FC_Vendor: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    Usa_Preco_Max_ST: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Ignora_Mov_Composicao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CodigoANP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    VolumeML: {
      type: "DOUBLE",
      allowNull: true
    },
    ICMSST_UltimaCompra: {
      type: "DOUBLE",
      allowNull: true
    },
    ST_PercentualRecuperar: {
      type: "DOUBLE",
      allowNull: true
    },
    DataInicioPromocao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Resp_Formula: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Resp_Qualidade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Fraciona: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Cst_IPI_Simples: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CSt_IPI: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FCI_Valor_Saida_Inter: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    FCI_Valor_Importado: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    FCI_pCI: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    FCI_Numero: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FCI_DataAlteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FCI_DataRegistro_Sefaz: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FCI_DataGeracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FCI_Protocolo: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    Controlado_Ibama: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ListaPreco2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Venda_Med_10Dias2: {
      type: "DOUBLE",
      allowNull: true
    },
    Recalcula_Custo_Composicao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    BaseST_Retido: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Fc_Outros: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    Icms_SemRed_SN: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    EXTIPI: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CodigoLinhaProduto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LinhaProduto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EANEmbCompra: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    DadosTecnicosEtiquetas: {
      type: DataTypes.STRING(8000),
      allowNull: true
    },
    Formacao_PIcmsST: {
      type: "DOUBLE",
      allowNull: true
    },
    TecladoBalanca: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CodigoEnqIPI: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    AdicionalGelado: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    OutrasDespesas_UltimaCompra: {
      type: "DOUBLE(11,3)",
      allowNull: true
    },
    ValorIpi_UltimaCompra: {
      type: "DOUBLE(11,3)",
      allowNull: true
    },
    ValorSeguro_UltimaCompra: {
      type: "DOUBLE(11,3)",
      allowNull: true
    },
    Cest: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Controlado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ceicom_exportado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    magento_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SemComissao: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    FORMACAO_pEmbalagem: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    CodigoVasilhame: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    QuantidadeVasilhame: {
      type: "DOUBLE",
      allowNull: true
    },
    POutros: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    SeparaPorEmpresa: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    TipoAtu: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SeqAtu: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    InfNutri_Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Perc_Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_ValorEnergetico: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Perc_ValorEnergetico: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Carboidratos: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Perc_Carboidratos: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Proteinas: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Perc_Proteinas: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_GordurasTotais: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Perc_GordurasTotais: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_GordurasSat: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Perc_GordurasSat: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Colesterol: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Perc_Colesterol: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_FibraAlimentar: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Perc_FibraAlimentar: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Calcio: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Perc_Calcio: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Ferro: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Perc_Ferro: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Ingredientes: {
      type: DataTypes.STRING(840),
      allowNull: true
    },
    InfNutri_Observacao: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    InfNutri_UM_Qtde: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    InfNutri_UM_ValorEnergetico: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    InfNutri_UM_Carboidratos: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    InfNutri_UM_Proteinas: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    InfNutri_UM_GordurasTotais: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    InfNutri_UM_GordurasSat: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    InfNutri_UM_Colesterol: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    InfNutri_UM_FibraAlimentar: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    InfNutri_UM_Calcio: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    InfNutri_UM_Ferro: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Anvisa: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    InfNutri_GordurasTrans: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Perc_GordurasTrans: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_UM_GordurasTrans: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    InfNutri_Sodio: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_Perc_Sodio: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_UM_Sodio: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    InfNutri_DescricaoPorcao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    InfNutri_QuantidadeCaseira: {
      type: "DOUBLE",
      allowNull: true
    },
    InfNutri_QuantidadeCaseira_UM: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    UnTrib: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TextoObservaEntradas: {
      type: DataTypes.STRING(170),
      allowNull: true
    },
    ExibeMyAcougue: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    IDPrateleira: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IDGondola: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IDGaveta: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ValorUnUltimaCompra: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoGradeKit: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ObservaEntradas: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    Gas_pGLP: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Gas_pGNn: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Gas_pGNi: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Gas_vPart: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    TipoExibicaoMyAcougue: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '0'
    },
    FORMACAO_vEmbalagem: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    DataUltimaEtiqueta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Multiplo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    pICMSEfet: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Cst_IPI_Compra: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FcpST_Retido: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    pFcpST_Retido: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    ICMS_UltimaCompra: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    pBCEfet: {
      type: "DOUBLE(11,3)",
      allowNull: true
    },
    ValorFabricaMedicamento: {
      type: "DOUBLE",
      allowNull: true
    },
    Tela: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'produtos'
  });
};
 */