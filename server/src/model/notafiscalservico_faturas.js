/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notafiscalservico_faturas', {
    Id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqNotaServico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    nDocumento: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    },
    FormaParcelamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Modalidade: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'notafiscalservico_faturas'
  });
};
