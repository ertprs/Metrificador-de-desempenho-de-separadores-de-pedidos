/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_ordem_desossa_desdobramento', {
    IODD_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IODD_EMP_CODIGO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IODD_IOD_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IODD_PDE_COMPOSICAO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IODD_PDE_PERCENTUAL: {
      type: "DOUBLE",
      allowNull: true
    },
    IODD_PDE_CALCULADO: {
      type: "DOUBLE",
      allowNull: true
    },
    IODD_PESO_FINAL: {
      type: "DOUBLE",
      allowNull: true
    },
    IODD_CUSTO_TOTAL: {
      type: "DOUBLE",
      allowNull: true
    },
    IODD_CUSTO_UNITARIO: {
      type: "DOUBLE",
      allowNull: true
    },
    IODD_CONDENADO: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    IODD_OACM_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IODD_OACM_DESCRICAO: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IODD_DATAINC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IODD_USU_CODIGO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IODD_TERMINAL: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    IODD_PDE_COMPOSICAO_DESCRICAO: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    IODD_PERC_FINAL: {
      type: "DOUBLE",
      allowNull: true
    },
    IODD_EDITADO: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    IODD_PRECO_VENDA: {
      type: "DOUBLE",
      allowNull: true
    },
    IODD_INDICE_PRECO: {
      type: "DOUBLE",
      allowNull: true
    },
    IODD_INDICE_PRECO_TIPO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IODD_PESO_CALCULADO: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'item_ordem_desossa_desdobramento'
  });
};
