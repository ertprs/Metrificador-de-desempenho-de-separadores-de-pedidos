/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sped_estorno_devcompra', {
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
    MesAno: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    SeqNota: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Ndoc: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    SerieDoc: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    DataNF: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ValorBase: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    AliqPis: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    ValorPis: {
      type: "DOUBLE",
      allowNull: false
    },
    AliqCofins: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    ValorCofins: {
      type: "DOUBLE",
      allowNull: false
    },
    ValorProduto: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    ValorContabil: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    cst_pis: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    tableName: 'sped_estorno_devcompra'
  });
};
