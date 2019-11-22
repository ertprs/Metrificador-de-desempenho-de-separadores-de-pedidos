/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fidelize_config', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    EnderecoFtp: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    UsuarioFtp: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SenhaFtp: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    UltimaConexao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'fidelize_config'
  });
};
