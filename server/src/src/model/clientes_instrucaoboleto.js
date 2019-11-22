/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes_instrucaoboleto', {
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Instrucao1: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    Instrucao2: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    Instrucao3: {
      type: DataTypes.STRING(80),
      allowNull: false
    }
  }, {
    tableName: 'clientes_instrucaoboleto'
  });
};
