/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_camposadicionais', {
    pca_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pca_descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pca_nome: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pca_tipo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pca_tamanho: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pca_obrigatorio: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'produtos_camposadicionais'
  });
};
