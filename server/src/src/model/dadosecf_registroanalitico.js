/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dadosecf_registroanalitico', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MarcaECF: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DataEmissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NumeroSerie: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SituacaoTributaria: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ValorAcumulado: {
      type: "DOUBLE",
      allowNull: true
    },
    Descontos: {
      type: "DOUBLE",
      allowNull: true
    },
    Cancelamentos: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'dadosecf_registroanalitico'
  });
};
