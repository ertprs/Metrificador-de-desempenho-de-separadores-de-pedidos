/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkpreviaocorrencia', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    TipoPrevia: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FormaRecebimento: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Dias: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    idPlano: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    UPF: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'milkpreviaocorrencia'
  });
};
