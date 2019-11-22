/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendasservicos', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoServico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DescExpandida: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Quantidade: {
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
    ValorNormal: {
      type: "DOUBLE",
      allowNull: true
    },
    Cancelada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CustoTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    ComissaoTotal: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    SequenciaNotaFiscal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeAFaturar: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    QtdeFaturada: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
    Pcomissao: {
      type: "DOUBLE",
      allowNull: true
    },
    VlrUntFat: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeHoras: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    TpServico: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Obj: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    marcoEtq: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    SeqNota: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DescontoMaximo: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    VencimentoGarantia: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoObjeto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    VSE_UUID_PDV: {
      type: "BINARY(16)",
      allowNull: true
    }
  }, {
    tableName: 'vendasservicos'
  });
};
