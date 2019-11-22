/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_mycomanda_adicionais', {
    Grupo: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Botao: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CodigoAdicional: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'config_mycomanda_adicionais'
  });
};
