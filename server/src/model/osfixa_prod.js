/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('osfixa_prod', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idSeqProd: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Bitola: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Matricula: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Class: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Material: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Eixo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Lado: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    idSeqServ: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    NRecapagem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FlagGarantia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FlagBonificacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FlagReposicao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    textoBonificacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoReposicao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoReforma: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TextoCarcaca: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoRecusado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    FlagRecusado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    textoExameInicial: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoRaspa: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoCompBanda: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoRaio: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoEscareacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoConserto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoCola: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoEnchimento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoCobertura: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoEnvelope: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoVulcanizacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoExameFinal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoBandaAplicada: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TextoConsertoAplicado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TextoCanaleta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoExtCinta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    textoPeso: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NumVulcanizacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Obs: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'osfixa_prod'
  });
};
