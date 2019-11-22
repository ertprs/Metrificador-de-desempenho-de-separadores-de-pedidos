/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelaestados_nfce', {
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    LimiteNFCe: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Versao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'tabelaestados_nfce'
  });
};
