/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sped_layout', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Tipo_Sped: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Layout: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    Data_Inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Data_Final: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Versao: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    tableName: 'sped_layout'
  });
};
