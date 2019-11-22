/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_sellout_pagamento', {
    id_cupom: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    id_loja: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    metodo: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    condicao: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    parcela: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    valor: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    prazo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ccflag_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    operation_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    authorization: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'v_yh_sellout_pagamento'
  });
};
