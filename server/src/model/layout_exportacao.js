/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('layout_exportacao', {
    LEX_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    LEX_DESCRICAO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    LEX_CABECALHO: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    LEX_RODAPE: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    LEX_XML: {
      type: "LONGBLOB",
      allowNull: true
    },
    LEX_DATAINC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LEX_ULTIMA_ATUALIZACAO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LEX_USUARIO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LEX_TERMINAL: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'layout_exportacao'
  });
};
