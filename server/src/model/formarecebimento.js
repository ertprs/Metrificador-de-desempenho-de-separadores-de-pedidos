/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formarecebimento', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Descricao: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Usa_TEF: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Empresas_TEF: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CodModalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Padrao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    TipoProdutoCartao: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CodigoCC: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DiaFechamentoCC: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    UltimaAlteracaoCad: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PadraoPagar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    NaoEnviaPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Historico: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    HistoricoDespesa: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    TpDeducaoIRPJ: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    PercentualAdicionalPDV: {
      type: "DOUBLE",
      allowNull: true
    },
    chkPercentualAdicionalPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'formarecebimento'
  });
};
