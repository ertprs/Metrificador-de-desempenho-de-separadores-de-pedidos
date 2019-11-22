/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mycobrador_lista_excecao', {
    mle_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mle_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    mle_razaosocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'mycobrador_lista_excecao'
  });
};
