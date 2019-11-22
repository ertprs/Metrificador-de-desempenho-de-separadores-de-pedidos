/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taxa_entrega', {
    TEN_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TEN_EMPRESA: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TEN_TIPO_COMPARTILHAMENTO: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    TEN_DESCRICAO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TEN_VALOR_TAXA: {
      type: "DOUBLE",
      allowNull: true
    },
    TEN_STATUS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TEN_DATAINC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TEN_USUARIO: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'taxa_entrega'
  });
};
