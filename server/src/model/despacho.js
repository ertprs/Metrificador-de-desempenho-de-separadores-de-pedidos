/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('despacho', {
    Seq: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    stat: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    DataColeta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataGravado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IdTrans: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Motorista: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Despachado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    DtDespacho: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Us: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DataExclui: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Ex_Motivo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataEntrega: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'despacho'
  });
};
