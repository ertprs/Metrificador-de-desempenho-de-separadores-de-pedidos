/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('custodia_boletos', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodCustodia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqCTR: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorBoleto: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTaxa: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorLiquido: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoRemessa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    DataEstorno: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    UserId: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'custodia_boletos'
  });
};
