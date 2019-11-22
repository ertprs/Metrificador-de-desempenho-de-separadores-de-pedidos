/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('flex_vendas', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Venda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    PreVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorCreditado: {
      type: "DOUBLE",
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    TotalExtra: {
      type: "DOUBLE",
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FormaParcelamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    }
  }, {
    tableName: 'flex_vendas'
  });
};
