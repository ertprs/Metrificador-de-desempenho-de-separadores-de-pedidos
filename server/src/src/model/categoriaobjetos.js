/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoriaobjetos', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MaskaraObjeto: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    tableName: 'categoriaobjetos'
  });
};
