/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('integracoes_mapeamento', {
    im_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    im_integracaoid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    im_mycommerceid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    im_integracao: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    im_entidade: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    im_data_alteracao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'integracoes_mapeamento'
  });
};
