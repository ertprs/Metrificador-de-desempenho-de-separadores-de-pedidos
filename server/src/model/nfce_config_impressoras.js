/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfce_config_impressoras', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SequenciaConfig: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Marca: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Modelo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'nfce_config_impressoras'
  });
};
