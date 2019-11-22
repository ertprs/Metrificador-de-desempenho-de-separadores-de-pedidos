/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apuracao_ipi', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DataFim: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    SaldoAnterior: {
      type: "DOUBLE",
      allowNull: false
    },
    Total_Debitos: {
      type: "DOUBLE",
      allowNull: false
    },
    Total_Creditos: {
      type: "DOUBLE",
      allowNull: false
    },
    Saldo_Credor: {
      type: "DOUBLE",
      allowNull: false
    },
    Saldo_Devedor: {
      type: "DOUBLE",
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Total_Entradas: {
      type: "DOUBLE",
      allowNull: false
    },
    Total_Saidas: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'apuracao_ipi'
  });
};
