/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cheques_config', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Ncampo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Esquerda: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Superior: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Largura: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Fonte: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    FonteTamanho: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Negrito: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    OCulto: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    IDCheque: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'cheques_config'
  });
};
