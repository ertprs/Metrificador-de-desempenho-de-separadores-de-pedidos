/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('op', {
    IDOP: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Estampa: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Ref_Cliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Desc_Ref_Cliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DataProducao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Estampador: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Qtde_Produzida: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    Qtde_Defeitos: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    Qtde_Defeito2: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    ValorPeca: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Desconto: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    StatusOP: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'E'
    },
    Qtde_tinta: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    DataEntrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IDBaixa: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Lote: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Lado1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Lado2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nRecibo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Tipo_Tecido: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'SILK'
    },
    DataFaturada: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Periodo: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    QtdeDefeitoTecido: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Tipo_Tinta1: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Tipo_Tinta2: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Lado3: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Nestampa: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Lado4: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Lado5: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Lado6: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CustoImp: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    Recibo_QtdePecas: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    Recibo_QtdeRef: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    DataBaixa: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ArteOK: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TelaOK: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ProdOK: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'op'
  });
};
