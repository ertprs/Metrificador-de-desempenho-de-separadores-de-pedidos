/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctrc_saida_docref', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDSaida: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SubSerie: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    nDoc: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DataEmissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE(11,2)",
      allowNull: true
    }
  }, {
    tableName: 'ctrc_saida_docref'
  });
};
