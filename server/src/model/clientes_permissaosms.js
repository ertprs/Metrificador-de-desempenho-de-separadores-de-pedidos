/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes_permissaosms', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Aniversario: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Cobranca: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    OS: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Promocao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Outros_Avisos: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'clientes_permissaosms'
  });
};
