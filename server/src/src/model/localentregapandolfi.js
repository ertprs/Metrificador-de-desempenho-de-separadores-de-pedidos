/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('localentregapandolfi', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Responsavel: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoComplexo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DiasEntrega: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'localentregapandolfi'
  });
};
