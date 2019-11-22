/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdfe_seguros', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_MDFe: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    RespSeguro: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    CNPJ_RespSeguro: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Nome_Seguradora: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CNPJ_Seguradora: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Apolice_Seguradora: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Averbacao_Seguradora: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CodigoSeguradora: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'mdfe_seguros'
  });
};
