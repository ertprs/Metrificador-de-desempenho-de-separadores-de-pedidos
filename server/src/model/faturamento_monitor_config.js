/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faturamento_monitor_config', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MonitorAtivo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Intervalo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ContManual: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    dhAtivoCont: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UserAtivoCont: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    TerminalAtivoCont: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idBloqueto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoEmpresa: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    SerieNFe: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PathSalvar: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    LarguraPapel: {
      type: "DOUBLE",
      allowNull: true
    },
    AlturaPapel: {
      type: "DOUBLE",
      allowNull: true
    },
    idCOI: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    idCOIBonificacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FatPedidoTipo6: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    NaoMovimentaEstoque: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'faturamento_monitor_config'
  });
};
