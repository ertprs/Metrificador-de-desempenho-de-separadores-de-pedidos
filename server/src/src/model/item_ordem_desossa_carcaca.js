/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_ordem_desossa_carcaca', {
    IODC_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IODC_EMP_CODIGO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IODC_IOD_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IODC_IOAA_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IODC_IOAA_RASTREABILIDADE_DIA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IODC_IOAA_RAST_DIA: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IODC_IOAA_DATA_ABATE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IODC_IOAA_QUANTIDADE_TOTAL_LIQUIDO: {
      type: "DOUBLE",
      allowNull: true
    },
    IODC_PESO_ANTES_DESOSSA: {
      type: "DOUBLE",
      allowNull: true
    },
    IODC_DIFERENCA: {
      type: "DOUBLE",
      allowNull: true
    },
    IODC_PRECO_UNITARIO: {
      type: "DOUBLE",
      allowNull: true
    },
    IODC_CUSTO_TOTAL_PERDA: {
      type: "DOUBLE",
      allowNull: true
    },
    IODC_PH: {
      type: "DOUBLE",
      allowNull: true
    },
    IODC_DATAINC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IODC_USU_CODIGO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IODC_TERMINAL: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    tableName: 'item_ordem_desossa_carcaca'
  });
};
