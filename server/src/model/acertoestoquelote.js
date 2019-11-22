/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acertoestoquelote', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDAcerto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'acertoestoquelote'
  });
};
