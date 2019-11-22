/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('smsenviados', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Cliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Para: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    Msg: {
      type: DataTypes.STRING(140),
      allowNull: false
    },
    id_envio: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RecebimentoEM: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'smsenviados'
  });
};
