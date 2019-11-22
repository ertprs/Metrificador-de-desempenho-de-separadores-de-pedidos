/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_sellin_pagamento', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    id_loja: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    metodo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    condicao: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    valor: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    parcela: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    prazo: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    operation_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    authorization: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'v_yh_sellin_pagamento'
  });
};
