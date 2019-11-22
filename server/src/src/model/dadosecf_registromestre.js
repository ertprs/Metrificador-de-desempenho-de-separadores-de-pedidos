/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dadosecf_registromestre', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataEmissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    MarcaECF: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NumeroSerie: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NumeroOrdem: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ModeloDocumento: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NContadorOPInicioDia: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NContadorOPFimDia: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NContadorReducaoZ: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NContadorReinicioOperacao: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ValorVendaBruta: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotalizadorGeral: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'dadosecf_registromestre'
  });
};
