/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cheques_baixa', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDCONTA: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Dias: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Banco: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    NCheque: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Juros: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    NConta: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    NTroca: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DataTroca: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    BancoTroca: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    JurosTroca: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'cheques_baixa'
  });
};
