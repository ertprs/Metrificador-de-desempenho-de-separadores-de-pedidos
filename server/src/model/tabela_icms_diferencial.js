/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabela_icms_diferencial', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Protocolo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ValidoAte: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pBase: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    pIcms: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    NCM: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    tableName: 'tabela_icms_diferencial'
  });
};
