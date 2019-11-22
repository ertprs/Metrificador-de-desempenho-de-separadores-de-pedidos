/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendedores_camposadicionais', {
    vca_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    vca_descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    vca_nome: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    vca_tipo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    vca_tamanho: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    vca_obrigatorio: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'vendedores_camposadicionais'
  });
};
