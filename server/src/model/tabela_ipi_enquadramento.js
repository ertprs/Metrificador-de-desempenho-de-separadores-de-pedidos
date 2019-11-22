/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabela_ipi_enquadramento', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Grupo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    Versao: {
      type: DataTypes.STRING(4),
      allowNull: false
    }
  }, {
    tableName: 'tabela_ipi_enquadramento'
  });
};
