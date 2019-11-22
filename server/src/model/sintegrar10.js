/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sintegrar10', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CNPJ: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    IE: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    NomeContribuinte: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Municipio: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DataInicial: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    DataFinal: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    IDConvenio: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IDNatureza: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IDFinalidade: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    tableName: 'sintegrar10'
  });
};
