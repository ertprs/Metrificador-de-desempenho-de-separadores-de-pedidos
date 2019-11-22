/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidocompra', {
    NPedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IdFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IdComprador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Total: {
      type: "DOUBLE UNSIGNED",
      allowNull: true
    },
    ValorFrete: {
      type: "DOUBLE",
      allowNull: true
    },
    PICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    FretePorConta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeParcela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Intervalo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Baixado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataEntrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataFaturamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Obs: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    DataRecebimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoViagem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeViagem: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoCliente_Faturamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    EmailEnviado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NomeFantasia: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TextoIntervalo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DataEntregue: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraEntregue: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: 'Pendente'
    },
    LiberadoPor: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    LiberadoEm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Liberado_Obs: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Obs_Baixa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoTransportadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeTransportadora: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FormaPagamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    UltimaAlteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CampoBuscaGridItens: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    FiltroBaseSugestao: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    UsouArredondamentoCx: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    UsouFatorCx: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    IdSolicitante: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    StatusPedido: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    tableName: 'pedidocompra'
  });
};
