/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('consultaspc', {
    CodigoCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Texto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SalvaEm: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    NResposta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'consultaspc'
  });
};
