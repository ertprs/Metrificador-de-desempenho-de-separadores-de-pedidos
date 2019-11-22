/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkromaneios', {
    CodigoRomaneio: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoTrans: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QuantLitros: {
      type: "DOUBLE(11,2)",
      allowNull: false
    },
    DataEntrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PercAgua: {
      type: "DOUBLE",
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    NomeTrans: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NomeEmpresa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CNPJEmpresa: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    HoraEntrega: {
      type: DataTypes.TIME,
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QuantComAgua: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Acidez: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    QtdRomaneio: {
      type: "DOUBLE",
      allowNull: true
    },
    Diferenca: {
      type: "DOUBLE",
      allowNull: true
    },
    Obs: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CodigoRota: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    EstoqueBaixado: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'milkromaneios'
  });
};
