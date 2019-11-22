/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupo_meta_qtde', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoGrupo: {
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
    },
    QtdeMetaLts: {
      type: "DOUBLE",
      allowNull: false
    },
    QtdeMetaRS: {
      type: "DOUBLE",
      allowNull: false
    },
    QtdeMetaCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'grupo_meta_qtde'
  });
};
