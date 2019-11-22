/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_cst', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    CodigoCF: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Cst_Simples: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ICMS_PF: {
      type: "DOUBLE",
      allowNull: true
    },
    ICMS_PJ: {
      type: "DOUBLE",
      allowNull: true
    },
    Base: {
      type: "DOUBLE",
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigocfPF: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Cst_SimplesPF: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    BasePF: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '100'
    },
    Cst_Revenda_SN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    BASE_PJ_SN: {
      type: "DOUBLE",
      allowNull: true
    },
    ICMS_PJ_SN: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'produtos_cst'
  });
};
