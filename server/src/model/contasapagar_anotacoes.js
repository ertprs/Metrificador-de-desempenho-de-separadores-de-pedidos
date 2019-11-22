/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contasapagar_anotacoes', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCTP: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    Anotacao: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'contasapagar_anotacoes'
  });
};
