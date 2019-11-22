/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cte_config', {
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    UltimoCTe: {
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
    },
    TransmitirAutomaticamente: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    Modelo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '57'
    }
  }, {
    tableName: 'cte_config'
  });
};
