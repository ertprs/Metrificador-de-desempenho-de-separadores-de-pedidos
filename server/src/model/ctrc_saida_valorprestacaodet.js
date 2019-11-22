/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctrc_saida_valorprestacaodet', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDSaida: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Nome: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    Valor: {
      type: "DOUBLE(11,2)",
      allowNull: false
    }
  }, {
    tableName: 'ctrc_saida_valorprestacaodet'
  });
};
