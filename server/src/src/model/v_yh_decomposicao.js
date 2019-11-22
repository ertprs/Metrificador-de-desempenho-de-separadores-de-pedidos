/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_decomposicao', {
    sku: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    codigo_interno: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    cnpj: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    id_loja: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    dt_ultima_alt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'v_yh_decomposicao'
  });
};
