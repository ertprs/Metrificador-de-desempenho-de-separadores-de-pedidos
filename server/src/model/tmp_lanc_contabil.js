/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_lanc_contabil', {
    sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataLancamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ContaCredito: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ContaDebito: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Historico: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CodigoDoc: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    tipoDoc: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    tableName: 'tmp_lanc_contabil'
  });
};
