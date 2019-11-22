/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_plano_controle', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoBanhoTosa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdBanho: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdTosa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdHidratacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdBanhoRealizado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdTosaRealizado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdHidratacaoRealizado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataBuscar: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraInicial: {
      type: DataTypes.TIME,
      allowNull: true
    },
    HoraFinal: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Ativo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Concluida: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Contrato: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    GeradaOs: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DataRealizado: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraRealizado: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Lancada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ValorAvulso: {
      type: "DOUBLE",
      allowNull: true
    },
    Transporte_Buscar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Transporte_Entregar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    IsTosaHigienica: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    QtdTosaHig: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DiaFixo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    QtdTosaHigRealizado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
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
    ValorEntrega: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorPlano: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PlanoMensalOS: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    GerarOS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CodigoOS: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'petshop_plano_controle'
  });
};
