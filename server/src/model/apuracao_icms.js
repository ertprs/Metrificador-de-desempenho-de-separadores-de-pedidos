/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apuracao_icms', {
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
    ICMS_Entrada: {
      type: "DOUBLE",
      allowNull: false
    },
    ICMS_Saida: {
      type: "DOUBLE",
      allowNull: false
    },
    Total_Ajuste_Debito: {
      type: "DOUBLE",
      allowNull: false
    },
    Total_Estorno_Credito: {
      type: "DOUBLE",
      allowNull: false
    },
    Total_Debito_Esp: {
      type: "DOUBLE",
      allowNull: false
    },
    Total_Ajuste_Credito: {
      type: "DOUBLE",
      allowNull: false
    },
    Total_Estorno_Debito: {
      type: "DOUBLE",
      allowNull: false
    },
    Total_deducoes: {
      type: "DOUBLE",
      allowNull: false
    },
    SaldoCredor: {
      type: "DOUBLE",
      allowNull: false
    },
    SaldoDevedor: {
      type: "DOUBLE",
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    E116_CODOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    E116_VLROR: {
      type: "DOUBLE",
      allowNull: true
    },
    E116_VENC: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    E116_CODREC: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    E116_NUMPROC: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    E116_INDPROC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    E116_PROC: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    E116_TXTCOMPL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    E116_MESANO: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Total_Ajuste_Credito_DocFiscal: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    Total_Ajuste_Ent_SN: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    DataLancamento: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    Total_Ajuste_ICMSSimplificado: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    }
  }, {
    tableName: 'apuracao_icms'
  });
};
