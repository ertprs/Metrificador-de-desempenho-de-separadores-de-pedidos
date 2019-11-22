/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkprodutoresvinculados', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProdutorPrincipal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NomeProdutorPrincipal: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    CodigoProdutorVinculado: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NomeProdutorVinculado: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    UsuarioExclusao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TerminalExclusao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DataExclusao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Percentual: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'milkprodutoresvinculados'
  });
};
