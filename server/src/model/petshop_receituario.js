/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_receituario', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoConsulta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Receituario: {
      type: DataTypes.STRING(8000),
      allowNull: true
    },
    Data_Hora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'petshop_receituario'
  });
};
