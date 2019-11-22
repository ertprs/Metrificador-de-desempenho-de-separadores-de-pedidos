/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_auxiliar', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Gondola: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Gaveta: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Prateleira: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IDPrateleira: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IDGondola: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IDGaveta: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'produtos_auxiliar'
  });
};
