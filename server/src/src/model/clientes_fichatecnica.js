/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes_fichatecnica', {
    IDCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NomeTecnico: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OBs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NomeMedico: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Indicacao: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'clientes_fichatecnica'
  });
};
