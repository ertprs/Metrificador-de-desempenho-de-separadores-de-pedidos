/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordem_desossa', {
    ODE_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ODE_EMP_CODIGO: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ODE_DATAINC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ODE_DATAALT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ODE_EMI_CODIGO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ODE_DATA_DESOSSA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ODE_STATUS: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ODE_QUANTIDADE: {
      type: "DOUBLE",
      allowNull: true
    },
    ODE_PESO_TOTAL: {
      type: "DOUBLE",
      allowNull: true
    },
    ODE_VALOR_TOTAL: {
      type: "DOUBLE",
      allowNull: true
    },
    ODE_OAB_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ODE_OAB_EMP_CODIGO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ODE_USU_CODIGO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ODE_TERMINAL: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    ODE_EMI_RAZAO: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    ODE_TIPO_CUSTO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ODE_GERA_CASCATA: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    ODE_ORDEM_ORIGEM: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ODE_EXIBE_SUBPROCESSAMENTO: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    ODE_SAIDA_NFI_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ODE_ENTRADA_NFI_NUMERO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NFI_DATA_FATURAMENTO: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NFI_USU_FATURAMENTO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NFI_TERMINAL_FATURAMENTO: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    ODE_SAIDA_NFI_NUMERO: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    ODE_ENTRADA_NFI_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'ordem_desossa'
  });
};
