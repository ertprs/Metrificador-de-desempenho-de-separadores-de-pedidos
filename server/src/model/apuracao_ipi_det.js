/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apuracao_ipi_det', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataInicial: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DataFinal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    TpAjuste: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoAjuste: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    OrigemDOC: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NDoc: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DescricaoDoc: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'apuracao_ipi_det'
  });
};
