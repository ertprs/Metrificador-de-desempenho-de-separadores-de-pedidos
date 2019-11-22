/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelapontuacaovenda', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ValorIntervalo: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorMaximo: {
      type: "DOUBLE",
      allowNull: true
    },
    PontosIntervalo: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IsPontuacaoValeCompra: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'tabelapontuacaovenda'
  });
};
