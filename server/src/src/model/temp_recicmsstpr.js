/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_recicmsstpr', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UM: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ValorCusto: {
      type: "DOUBLE",
      allowNull: true
    },
    ICMS_Intra: {
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
    ICMSST_UltimaCompra: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeVendida: {
      type: "DOUBLE",
      allowNull: true
    },
    NCM: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ICMS_Inter: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'temp_recicmsstpr'
  });
};
