/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_formas', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    CodigoMovimento: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    CodigoForma: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CodigoAbertura: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Mov: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    tableName: 'temp_formas'
  });
};
