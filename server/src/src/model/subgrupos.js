/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subgrupos', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    CodigoGrupo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DescricaoGrupo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    Palm_Envia: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    SugestaoVenda: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      defaultValue: ' '
    },
    magento_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UltimaAlteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    tableName: 'subgrupos'
  });
};
