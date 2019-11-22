/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contasareceber_avalista', {
    SeqCr: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    CPF: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'contasareceber_avalista'
  });
};
