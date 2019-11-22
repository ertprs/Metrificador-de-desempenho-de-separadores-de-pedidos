/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('satpendente', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    processado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodigoEmpresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    VendaPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ImpEndereco: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ImpModelo: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'satpendente'
  });
};
