/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_plano', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Plano: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    QtdMes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IntervaloDias: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ChkBanho: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    QtdBanho: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ChkTosa: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    QtdTosa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ChkHidratacao: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    QtdHidratacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    DescricaoPlano: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Ativo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    },
    PagamentoAdiantado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    CodigoServico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Transporte_Buscar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Transporte_entregar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    QtdeMeses: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DiaFixo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    QtdTosaHig: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PlanoEditavel: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ValorBanho: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorHigienica: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTosa: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorHidratacao: {
      type: "DOUBLE",
      allowNull: true
    },
    PlanoMensalOS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'petshop_plano'
  });
};
