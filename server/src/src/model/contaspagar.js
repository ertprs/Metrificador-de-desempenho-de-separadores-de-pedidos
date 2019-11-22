/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contaspagar', {
    IDContas: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    ValorPago: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Desc_Cob: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Obs: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    IDBaixa: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IdFornecedor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Tipo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Historico: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Doc: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Parcela: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    DataPagamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Juros: {
      type: "DOUBLE",
      allowNull: false
    },
    DATAEMISSAO: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Banco: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Ncheque: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    Desconto: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'contaspagar'
  });
};
