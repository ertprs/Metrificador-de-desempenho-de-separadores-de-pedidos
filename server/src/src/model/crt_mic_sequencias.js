/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crt_mic_sequencias', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodPais: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    SequenciaCRT: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    SequenciaMIC: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'crt_mic_sequencias'
  });
};
