/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('custodia', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Hora: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    QtdeTitulos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    TotalBoletos: {
      type: "DOUBLE",
      allowNull: false
    },
    TotalTaxas: {
      type: "DOUBLE",
      allowNull: false
    },
    TotalLiquido: {
      type: "DOUBLE",
      allowNull: false
    },
    Status: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    CodContaCreditado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataCredito: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraCredito: {
      type: DataTypes.TIME,
      allowNull: true
    },
    CodMovCredito: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodCredor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Conta_Emprestimo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Conta_Juros: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodMovDebito: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
    tableName: 'custodia'
  });
};
