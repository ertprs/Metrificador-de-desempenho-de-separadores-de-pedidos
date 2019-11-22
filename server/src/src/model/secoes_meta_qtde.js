/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('secoes_meta_qtde', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoSecao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    MesAno: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    QtdeMetaCX: {
      type: "DOUBLE",
      allowNull: false
    },
    QtdeMetaKG: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'secoes_meta_qtde'
  });
};
