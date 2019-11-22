/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servidoresbase_log', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Descricao_Antes: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    Descricao_Nova: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    Tabela: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'servidoresbase_log'
  });
};
