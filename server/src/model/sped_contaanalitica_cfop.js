/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sped_contaanalitica_cfop', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idConta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CFOP: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'sped_contaanalitica_cfop'
  });
};
