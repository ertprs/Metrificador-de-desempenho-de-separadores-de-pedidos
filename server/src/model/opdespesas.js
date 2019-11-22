/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opdespesas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Recibo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    NRecibo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Nfatura: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DataFaturada: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    StatusD: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: 'E'
    },
    Periodo: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'opdespesas'
  });
};
