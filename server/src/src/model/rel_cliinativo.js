/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rel_cliinativo', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    UltimaOperacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ValPendencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DiasAtraso: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ModalidadeCb: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'rel_cliinativo'
  });
};
