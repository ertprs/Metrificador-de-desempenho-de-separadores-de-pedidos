/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_tidas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Site: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodInstituicao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NumeroLoja: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Senha: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoCaixa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'config_tidas'
  });
};
