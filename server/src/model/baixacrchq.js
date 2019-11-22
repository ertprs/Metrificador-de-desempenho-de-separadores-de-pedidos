/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('baixacrchq', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idbaixa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    idcr: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    valorpendente: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorEstornado: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'baixacrchq'
  });
};
