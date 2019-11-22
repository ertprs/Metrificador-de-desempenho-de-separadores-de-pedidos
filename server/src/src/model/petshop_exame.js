/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_exame', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Fisico_AparenciaGeral: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    Fisico_MusculoEsqueletico: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    Fisico_Circulatorio: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    Fisico_Respiratorio: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    Fisico_Digestorio: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    Fisico_Urinario: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    Fisico_Genital: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    Fisico_Linfatico: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    Fisico_Nervoso: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    Fisico_Visual: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    Fisico_Auditivo: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    Fisico_Tegumento: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    Anamnese: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    DiagnosticoAlteracoesObservadas: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    DiagnosticoResultadosComplementares: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    DiagnosticoPrognostico: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    DiagnosticoTerapeutica: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    Peso: {
      type: "DOUBLE",
      allowNull: true
    },
    TemperaturaRetal: {
      type: "DOUBLE",
      allowNull: true
    },
    FrequenciaCardiaca: {
      type: "DOUBLE",
      allowNull: true
    },
    FrequenciaRespiratoria: {
      type: "DOUBLE",
      allowNull: true
    },
    Responsavel: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Hemacias: {
      type: "DOUBLE",
      allowNull: true
    },
    Hemoglobina: {
      type: "DOUBLE",
      allowNull: true
    },
    Hematocrito: {
      type: "DOUBLE",
      allowNull: true
    },
    RDW: {
      type: "DOUBLE",
      allowNull: true
    },
    Leucocitos: {
      type: "DOUBLE",
      allowNull: true
    },
    Bastoes: {
      type: "DOUBLE",
      allowNull: true
    },
    Segmentados: {
      type: "DOUBLE",
      allowNull: true
    },
    Eosinofilos: {
      type: "DOUBLE",
      allowNull: true
    },
    Basofilos: {
      type: "DOUBLE",
      allowNull: true
    },
    Linfocitos: {
      type: "DOUBLE",
      allowNull: true
    },
    Monocitos: {
      type: "DOUBLE",
      allowNull: true
    },
    Plaquetas: {
      type: "DOUBLE",
      allowNull: true
    },
    MPV: {
      type: "DOUBLE",
      allowNull: true
    },
    ObsRespiratoria: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TamanhoCelular: {
      type: "DOUBLE",
      allowNull: true
    },
    PercNeutrofilos: {
      type: "DOUBLE",
      allowNull: true
    },
    NumNeutrofilos: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'petshop_exame'
  });
};
