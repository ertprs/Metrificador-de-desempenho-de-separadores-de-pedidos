/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('depesasentrega', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Nrecibo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'depesasentrega'
  });
};
