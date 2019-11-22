/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendasprodutos_selfcolor_composicao', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_VP_SC_PROD: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    SeqProdVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    COD_PROD_INTERNO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    COD: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DES: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SIGLA_COLORANTE: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    QTDE_PULSO: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    QTDE_PULSO_ORIGINAL: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    QTDE_ML: {
      type: "DOUBLE",
      allowNull: false
    },
    VALOR_UNITARIO: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    VALOR_TOTAL: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    isBase: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'vendasprodutos_selfcolor_composicao'
  });
};
