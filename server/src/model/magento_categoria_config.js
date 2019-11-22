/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('magento_categoria_config', {
    magento_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    tipo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    is_active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    default_sort_by: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    display_mode: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    is_anchor: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    landing_page: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    page_layout: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    include_in_menu: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    custom_use_parent_settings: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    available_sort_by: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    tableName: 'magento_categoria_config'
  });
};
