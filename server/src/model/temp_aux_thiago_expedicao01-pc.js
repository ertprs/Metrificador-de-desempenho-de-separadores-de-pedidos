/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_aux_thiago_expedicao01-pc', {
    codPro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'temp_aux_thiago_expedicao01-pc'
  });
};
