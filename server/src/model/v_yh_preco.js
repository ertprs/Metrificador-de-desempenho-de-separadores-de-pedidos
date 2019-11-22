/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_preco', {
    preço: {
      type: "DOUBLE",
      allowNull: true
    },
    preço_promoção: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    dt_inicio_promo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dt_fim_prom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    produto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
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
    tableName: 'v_yh_preco'
  });
};
