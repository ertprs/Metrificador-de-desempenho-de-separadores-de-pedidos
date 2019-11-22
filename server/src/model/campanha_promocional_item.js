/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campanha_promocional_item', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCampanha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoItem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DescricaoItem: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'campanha_promocional_item'
  });
};
