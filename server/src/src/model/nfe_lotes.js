/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfe_lotes', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    QtdeNf: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    MsgRetorno: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Protocolo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Processado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Serie: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    E_S: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Ret_LOTE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Excluido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    OFF_IDLote: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'nfe_lotes'
  });
};
