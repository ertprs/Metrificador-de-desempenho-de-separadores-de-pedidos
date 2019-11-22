/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spcbrasil_consultas', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    Operadora: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: 'SPC BRASIL'
    }
  }, {
    tableName: 'spcbrasil_consultas'
  });
};
