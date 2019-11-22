/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelaicms_aliqinternatransporte', {
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    Aliquota: {
      type: "DOUBLE(11,2)",
      allowNull: false
    },
    Versao: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    tableName: 'tabelaicms_aliqinternatransporte'
  });
};
