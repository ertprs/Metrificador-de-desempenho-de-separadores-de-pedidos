/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('statusos', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Cor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PadraoAbrirOS: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    PadraoFinalizarOS: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    ExigirSenhaSupervisor: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'statusos'
  });
};
