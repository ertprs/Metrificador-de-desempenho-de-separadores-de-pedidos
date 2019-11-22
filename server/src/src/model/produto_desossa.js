/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produto_desossa', {
    PDE_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PDE_EMP_CODIGO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    PDE_EMI_CODIGO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PDE_ARA_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PDE_PRO_CODIGO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PDE_COMPOSICAO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PDE_PERCENTUAL: {
      type: "DOUBLE",
      allowNull: true
    },
    PDE_USU_CODIGO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PDE_DATAINC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PDE_TERMINAL: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    PDE_TIPO_COMPOSICAO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PDE_INDICE_PRECO: {
      type: "DOUBLE",
      allowNull: true
    },
    PDE_INDICE_PRECO_TIPO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'produto_desossa'
  });
};
