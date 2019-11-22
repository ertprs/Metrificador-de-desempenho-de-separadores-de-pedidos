/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chequest', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Banco: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Agencia: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NConta: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NCheque: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    DataCadastro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataPre: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Observacoes: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Fornecedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DataRepasse: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataLiquidado: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoMovForma: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataFrio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Excluido: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ExcluidoUser: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ExcluidoTerminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Origem: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    CPF_EMITENTE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CodigoConta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Us_Alt: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Ter_Alt: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Us_Oper: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Camara: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: '009'
    },
    Data_alt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TipoPag: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    EmpresaOrigem: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    idTransf: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodContaRepasse: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IdCaixaMovimento: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    idbaixa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCaixa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CMFRepasse: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    EmMaos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'chequest'
  });
};
