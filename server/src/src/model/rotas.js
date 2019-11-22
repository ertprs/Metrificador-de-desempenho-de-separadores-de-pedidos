/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rotas', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    CodRegiao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Excluido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    MilkDiaPGM: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoTransportadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'rotas'
  });
};
