/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sintegrar11', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Logadouro: {
      type: DataTypes.STRING(34),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Complemento: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    Bairro: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    NomeContato: {
      type: DataTypes.STRING(28),
      allowNull: true
    },
    Telefone: {
      type: DataTypes.STRING(12),
      allowNull: true
    }
  }, {
    tableName: 'sintegrar11'
  });
};
