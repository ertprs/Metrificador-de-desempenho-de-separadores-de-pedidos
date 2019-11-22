/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meta_fornecedor', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Meta: {
      type: "DOUBLE",
      allowNull: true
    },
    Positivacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Meta_Geral: {
      type: "DOUBLE",
      allowNull: true
    },
    MesAno: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'meta_fornecedor'
  });
};
