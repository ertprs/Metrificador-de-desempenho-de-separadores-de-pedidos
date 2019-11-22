/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('correios_sro_detalhes', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDObjeto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Local: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LocalObs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Situacao: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'correios_sro_detalhes'
  });
};
