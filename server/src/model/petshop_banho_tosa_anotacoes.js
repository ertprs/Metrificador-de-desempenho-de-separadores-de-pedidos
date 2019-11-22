/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_banho_tosa_anotacoes', {
    Sequencia: {
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
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Anotacao: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CodigoBanhoTosa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'petshop_banho_tosa_anotacoes'
  });
};
