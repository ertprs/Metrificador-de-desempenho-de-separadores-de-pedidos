/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cobrancas_rec_formas', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDCobDetalhes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDForma: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    NLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDCLiente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'cobrancas_rec_formas'
  });
};
