/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rel_info', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Mesano: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    },
    texto: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Cab: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'rel_info'
  });
};
