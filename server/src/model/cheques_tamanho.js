/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cheques_tamanho', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MargemSuperior: {
      type: "DOUBLE",
      allowNull: true
    },
    MargemEsquerda: {
      type: "DOUBLE",
      allowNull: true
    },
    DistanciaVertical: {
      type: "DOUBLE",
      allowNull: true
    },
    DistanciaHorizontal: {
      type: "DOUBLE",
      allowNull: true
    },
    AlturaCheque: {
      type: "DOUBLE",
      allowNull: true
    },
    LarguraCheque: {
      type: "DOUBLE",
      allowNull: true
    },
    ChequesPorLinha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ChequesPorPagina: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeFantasia: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    UltimoNumero: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IgnoreValidacaoNumero: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'cheques_tamanho'
  });
};
