/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdfe_valepedagio', {
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
    CNPJ_Fornecedor: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    CNPJ_Responsavel: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Comprovante: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE(13,2)",
      allowNull: true
    }
  }, {
    tableName: 'mdfe_valepedagio'
  });
};
