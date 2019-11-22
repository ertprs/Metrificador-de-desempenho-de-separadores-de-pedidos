/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nota_config', {
    Ncampo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Linha: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Coluna: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Condensado: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Expandido: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Negrito: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Serie: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Tamanho: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    OCulto: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Alinhamento: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Quebra: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'nota_config'
  });
};
