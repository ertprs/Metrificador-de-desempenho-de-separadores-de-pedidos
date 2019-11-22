/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadolivre_anuncio', {
    MLA_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MLA_DATAHORA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MLA_STATUS: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    MLA_TIPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    MLA_CODIGOPRODUTO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MLA_DETALHES: {
      type: DataTypes.STRING(8000),
      allowNull: true
    },
    MLA_CODIGO_TABELA: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    MLA_PRECO: {
      type: "DOUBLE",
      allowNull: true
    },
    MLA_CATEGORIA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MLA_TITULO: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    MLA_DATAHORAALTERACAO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MLA_EMREVISAO: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    MLA_STATUS_USUARIO: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'mercadolivre_anuncio'
  });
};
