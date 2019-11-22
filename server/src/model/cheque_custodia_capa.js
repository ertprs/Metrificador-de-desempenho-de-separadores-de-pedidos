/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cheque_custodia_capa', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_CONTA: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    EMISSAO: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    VENCIMENTO: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    TOTAL: {
      type: "DOUBLE",
      allowNull: false
    },
    CHEQUE_AVISTA: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Liquidado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    idCRCreditado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'cheque_custodia_capa'
  });
};
