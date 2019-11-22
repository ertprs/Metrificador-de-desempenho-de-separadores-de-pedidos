/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cst_pis_cofins', {
    ID: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    Descricao: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    TIPO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    tableName: 'cst_pis_cofins'
  });
};
