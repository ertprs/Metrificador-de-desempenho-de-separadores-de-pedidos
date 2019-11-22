/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('baixacartao', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ValorBruto: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTarifa: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorLiquido: {
      type: "DOUBLE",
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DataBaixado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataEstorno: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodigoContaLiquidado: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'baixacartao'
  });
};
