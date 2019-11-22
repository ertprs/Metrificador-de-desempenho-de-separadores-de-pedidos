/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entregapdvlinhas', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Linha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoLinha: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    SequenciaEntrega: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'entregapdvlinhas'
  });
};
