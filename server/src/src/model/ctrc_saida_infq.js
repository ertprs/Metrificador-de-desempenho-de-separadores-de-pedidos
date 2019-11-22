/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctrc_saida_infq', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDSaida: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    cUnid: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    tpMed: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    qCarga: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'ctrc_saida_infq'
  });
};
