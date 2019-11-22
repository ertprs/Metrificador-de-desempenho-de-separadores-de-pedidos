/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_recicmsstpr_nf', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NF: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCusto: {
      type: "DOUBLE",
      allowNull: true
    },
    Base_ICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    Valor_ICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    Ipi: {
      type: "DOUBLE",
      allowNull: true
    },
    Aliq_St: {
      type: "DOUBLE",
      allowNull: true
    },
    BC_ICMS_ST: {
      type: "DOUBLE",
      allowNull: true
    },
    ICMS_ST: {
      type: "DOUBLE",
      allowNull: true
    },
    ICMS_ST_Unit: {
      type: "DOUBLE",
      allowNull: true
    },
    BC_ICMS_ST_Simples: {
      type: "DOUBLE",
      allowNull: true
    },
    ICMS_ST_Simples: {
      type: "DOUBLE",
      allowNull: true
    },
    ICMS_ST_Simples_Unit: {
      type: "DOUBLE",
      allowNull: true
    },
    Recup_Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    Recup_Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    MVA: {
      type: "DOUBLE",
      allowNull: true
    },
    MVA_Simples: {
      type: "DOUBLE",
      allowNull: true
    },
    Red_Mva: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoEntrada: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'temp_recicmsstpr_nf'
  });
};
