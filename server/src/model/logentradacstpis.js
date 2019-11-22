/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logentradacstpis', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CFOP: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Cst_Pis: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'logentradacstpis'
  });
};
