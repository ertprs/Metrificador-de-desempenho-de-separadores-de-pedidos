/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cheque_custodia_conta', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    AGENCIA: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    DV_AGENCIA: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    CONTA: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    DV_CONTA: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    BANCO: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    NBANCO: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    ID_ContaCorrente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'cheque_custodia_conta'
  });
};
