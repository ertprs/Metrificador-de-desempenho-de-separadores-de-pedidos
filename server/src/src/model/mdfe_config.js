/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdfe_config', {
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    UltimoMDFe: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Ambiente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Versao: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TipoCertificado: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CertificadoA1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CertificadoA3: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Senha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'mdfe_config'
  });
};
