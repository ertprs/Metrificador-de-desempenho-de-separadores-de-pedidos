/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parametros', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NomeTabela1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NomeTabela2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NomeTabela3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Conta_VendaVista: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Conta_VendaPRazo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Conta_VendaDev: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Conta_VendaComissao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Conta_OsVista: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Conta_OsPrazo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Conta_ServicoTerceiro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Conta_Boleto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Conta_Transf: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Modalidade_Boleto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Modalidade_Entrada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Conta_Transf_Credito: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Conta_PedidoCompra: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Conta_ValeCompra: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Conta_RecCartao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ChequesD_PlanoConta: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ChequesD_ModalidadeCb: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Conta_BaixaCartao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DescTit_Emprestimo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DescTit_Juros: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Conta_Ch_Previsao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Conta_Ch_Compensado: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ChequesCust_Descontar: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ChequesCust_Juros: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Conta_Caixa_Juros: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Conta_TrocasFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Conta_Caixa_Juros_Pagos: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Conta_BaixaCartaoTarifa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Conta_Exportacao_Cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Conta_Exportacao_Fornecedor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Conta_Exportacao_Produtos: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'parametros'
  });
};
