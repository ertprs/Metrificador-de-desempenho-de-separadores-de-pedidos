/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bloquetos_config', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Ncampo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Linha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Coluna: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tamanho: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Oculto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Nbanco: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Expandido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Negrito: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Alinhamento: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Condensado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDBLQ: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'bloquetos_config'
  });
};
