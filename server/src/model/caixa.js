/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caixa', {
    IDContas: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
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
    Desc_Cob: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    },
    Obs: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: '0'
    },
    IDBaixa: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: '0'
    },
    IdCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Tipo: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    Historico: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Doc: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    Parcela: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    DataPagamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Juros: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    ValorPago: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    TIPODESPESA: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    tableName: 'caixa'
  });
};
