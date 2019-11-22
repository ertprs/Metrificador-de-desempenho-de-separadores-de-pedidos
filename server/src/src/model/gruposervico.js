/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gruposervico', {
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    },
    Ativo: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'A'
    }
  }, {
    tableName: 'gruposervico'
  });
};
