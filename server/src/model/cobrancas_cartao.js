/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cobrancas_cartao', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Cliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataPre: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PrazoCartao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorLiquido: {
      type: "DOUBLE",
      allowNull: true
    },
    Tarifa: {
      type: "DOUBLE",
      allowNull: true
    },
    Parcelas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoOperadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Codigoproduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CV: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'cobrancas_cartao'
  });
};
