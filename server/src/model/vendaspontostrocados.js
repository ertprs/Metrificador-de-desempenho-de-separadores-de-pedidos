/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendaspontostrocados', {
    idVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Trocado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    UsuarioTerminal: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ' '
    },
    PontuacaoTrocaVale: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'vendaspontostrocados'
  });
};
