/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sped_estoque', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    UN: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: false
    },
    ValorUnitario: {
      type: "DOUBLE",
      allowNull: false
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    TP_Estoque: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Motivo_Estoque: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    BaseIcmsPresumido: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    ValorIcmsPresumido: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    }
  }, {
    tableName: 'sped_estoque'
  });
};
