/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cte_lotes', {
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
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    QtdeCte: {
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
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Ret_Lote: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Excluido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Modelo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '55'
    }
  }, {
    tableName: 'cte_lotes'
  });
};
