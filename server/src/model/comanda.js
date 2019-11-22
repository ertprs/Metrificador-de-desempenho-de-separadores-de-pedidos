/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comanda', {
    com_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    com_status: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    com_tipo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    com_limite: {
      type: "DOUBLE",
      allowNull: true
    },
    com_data_cadastro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    com_usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    com_numero: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'comanda'
  });
};
