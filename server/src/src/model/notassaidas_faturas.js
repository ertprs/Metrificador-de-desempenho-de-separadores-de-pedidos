/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notassaidas_faturas', {
    Id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    nDocumento: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    },
    FormaParcelamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Modalidade: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NDup: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    VDesc: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'notassaidas_faturas'
  });
};
