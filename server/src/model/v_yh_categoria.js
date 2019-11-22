/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_categoria', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    descrição: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    id_categoria_pai: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ''
    },
    id_loja: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    dt_ultima_alt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    tableName: 'v_yh_categoria'
  });
};
