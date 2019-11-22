/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reducao_medicamento', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    P_Generico: {
      type: "DOUBLE",
      allowNull: true
    },
    P_Similar: {
      type: "DOUBLE",
      allowNull: true
    },
    P_Outros: {
      type: "DOUBLE",
      allowNull: true
    },
    Alterado: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    tableName: 'reducao_medicamento'
  });
};
