/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdfe_cidade_descarregamento', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_MDFe: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ID_Cidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'mdfe_cidade_descarregamento'
  });
};
