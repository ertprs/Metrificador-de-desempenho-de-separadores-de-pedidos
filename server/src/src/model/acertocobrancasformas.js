/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acertocobrancasformas', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    CodigoMovimento: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    CodigoForma: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    CodigoAbertura: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'acertocobrancasformas'
  });
};
