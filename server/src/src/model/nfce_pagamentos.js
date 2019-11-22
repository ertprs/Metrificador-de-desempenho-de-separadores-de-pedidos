/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfce_pagamentos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    NFCe_Forma: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    },
    card_tpIntegra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    card_CNPJ: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    card_tBand: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    card_cAut: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    vcr_uuid_pdv: {
      type: "BINARY(16)",
      allowNull: true
    }
  }, {
    tableName: 'nfce_pagamentos'
  });
};
