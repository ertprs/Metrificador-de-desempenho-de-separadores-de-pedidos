/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caixaaberturasformas', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoAbertura: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
    ValorFinal: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'caixaaberturasformas'
  });
};
