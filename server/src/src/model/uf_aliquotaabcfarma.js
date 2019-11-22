/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('uf_aliquotaabcfarma', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Aliquota: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    UFs: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ALC: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'uf_aliquotaabcfarma'
  });
};
