/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkclientes_precos', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProdutor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ValorPorLitro: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorAdicional: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorConseleite: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    Percentagem: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Qualidade: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    chkCobrarFunRural: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    MensagemFunRural: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ' '
    },
    TipoFrete: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    TipoFreteVlr: {
      type: "DOUBLE UNSIGNED",
      allowNull: false,
      defaultValue: '0'
    },
    ContraCheque_MSGIndividual: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    ContraCheque_MSGGeral_Exibir: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    ValorAcido: {
      type: "DOUBLE(11,4)",
      allowNull: false,
      defaultValue: '0.0000'
    },
    AliquotaIncentivoDanfe: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'milkclientes_precos'
  });
};
