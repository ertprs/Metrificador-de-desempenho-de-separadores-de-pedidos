/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sped_config', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Layout: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    Finalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Perfil: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Atividade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CartaoCredito: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoAjuste5929: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    CodigoAjusteSN: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    BlocoK: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Bloco1900: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'sped_config'
  });
};
