/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meta_vendedor', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idVendedor: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    MesAno: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    Meta: {
      type: "DOUBLE",
      allowNull: false
    },
    MetaGeral: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'meta_vendedor'
  });
};
