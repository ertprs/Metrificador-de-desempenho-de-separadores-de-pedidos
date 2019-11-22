/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('simples_nacional_aliquotas', {
    sna_anexo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sna_faixa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sna_receita_inicial: {
      type: "DOUBLE",
      allowNull: true
    },
    sna_receita_final: {
      type: "DOUBLE",
      allowNull: true
    },
    sna_aliquota: {
      type: "DOUBLE",
      allowNull: true
    },
    sna_irpj: {
      type: "DOUBLE",
      allowNull: true
    },
    sna_csll: {
      type: "DOUBLE",
      allowNull: true
    },
    sna_cofins: {
      type: "DOUBLE",
      allowNull: true
    },
    sna_pis: {
      type: "DOUBLE",
      allowNull: true
    },
    sna_cpp: {
      type: "DOUBLE",
      allowNull: true
    },
    sna_icms: {
      type: "DOUBLE",
      allowNull: true
    },
    sna_ipi: {
      type: "DOUBLE",
      allowNull: true
    },
    sna_iss: {
      type: "DOUBLE",
      allowNull: true
    },
    sna_parcela_deduzir: {
      type: "DOUBLE",
      allowNull: true
    },
    sna_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Versao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'simples_nacional_aliquotas'
  });
};
