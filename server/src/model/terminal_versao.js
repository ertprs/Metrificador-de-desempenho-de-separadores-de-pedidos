/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('terminal_versao', {
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    Versao: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Sistema_Nome: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MacAddress: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Servidor: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Porta: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Banco: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    EnviadoAPI: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'terminal_versao'
  });
};
