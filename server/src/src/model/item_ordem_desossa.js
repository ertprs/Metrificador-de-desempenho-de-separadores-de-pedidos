/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_ordem_desossa', {
    IOD_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IOD_EMP_CODIGO: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    IOD_ODE_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IOD_ODE_EMP_CODIGO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IOD_PRO_CODIGO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IOD_ARA_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IOD_QUANTIDADE: {
      type: "DOUBLE",
      allowNull: true
    },
    IOD_PRECO_UNITARIO: {
      type: "DOUBLE",
      allowNull: true
    },
    IOD_PESO_TOTAL: {
      type: "DOUBLE",
      allowNull: true
    },
    IOD_VALOR_TOTAL: {
      type: "DOUBLE",
      allowNull: true
    },
    IOD_PRO_DESCRICAO: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    IOD_ARA_DESCRICAO: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    tableName: 'item_ordem_desossa'
  });
};
