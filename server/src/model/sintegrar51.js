/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sintegrar51', {
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
    DataEmissao: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    CFOP: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ValorTotal: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    ValorIPI: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    Isenta: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    Outras: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    Brancos: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Situacao: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    tableName: 'sintegrar51'
  });
};
