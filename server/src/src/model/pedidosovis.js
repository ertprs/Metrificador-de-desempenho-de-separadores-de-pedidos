/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidosovis', {
    IDPEDIDO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    IDEMPRESA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDCOLABORADOR: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDCLIENTE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CNPJCPFCLIENTE: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    IDTIPOPEDIDO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDFORMAPAGTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDPRAZOPAGTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDTRANSPORTADORA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CNPJCPFTRANSPORTADORA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ORDEMCOMPRA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DATAENTRADA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DATAFATURAMENTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    OBSPEDIDO: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    OBSNOTA: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    VALOR: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DESCONTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    VALORTOTAL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SALDOGERADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    STATUSPEDIDO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    STATUSPEDIDOERP: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    PEDIDOEMAIL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PEDIDOFAX: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FOBCIF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DATAHORAINC: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    EMPRESAFAT: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CaminhoArquivoNota: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    CaminhoArquivoBoleto: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    UUID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NFERETORNO: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    DESCRICAOTIPOPEDIDO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DATAHORA_RECEPCAO_PEDIDO: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp')
    },
    IDPEDIDOUSUARIO: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'pedidosovis'
  });
};
