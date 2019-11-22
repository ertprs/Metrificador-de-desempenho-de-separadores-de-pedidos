/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sintegrar74', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UM: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorUnitario: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'sintegrar74'
  });
};
