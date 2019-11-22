/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_logreceituario', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoReceituario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Data_Hora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Data_Receita: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'petshop_logreceituario'
  });
};
