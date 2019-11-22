/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comissoespagasvendas', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NComissao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    NVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ValorComissao: {
      type: "DOUBLE",
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Vendedor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'comissoespagasvendas'
  });
};
