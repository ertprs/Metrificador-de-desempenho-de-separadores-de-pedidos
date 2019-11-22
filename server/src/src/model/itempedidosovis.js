/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itempedidosovis', {
    IDITEMPEDIDO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    IDTABPRECO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDPEDIDO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDPRODUTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    QUANTIDADE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    QUANTIDADEFATURADA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DESCONTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    VALORUNITARIO: {
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
    VALORDIFERENCA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IDAUTORIZACAO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CUSTOPRODUTO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    MARGEMITEM: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PACOTE: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    },
    IDPACOTE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    OFERTA: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ESTOQUEEMPRESA1: {
      type: "DOUBLE UNSIGNED",
      allowNull: true,
      defaultValue: '0'
    },
    ESTOQUEEMPRESA2: {
      type: "DOUBLE UNSIGNED",
      allowNull: true,
      defaultValue: '0'
    },
    VALORTABPRECO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DATAHORA_RECEPCAO_ITEM: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    tableName: 'itempedidosovis'
  });
};
