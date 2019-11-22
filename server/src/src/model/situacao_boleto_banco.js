/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('situacao_boleto_banco', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqCR: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NossoNumero: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DvNossoNumero: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    IDBlq: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Situacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Tarifa: {
      type: "DOUBLE(11,2)",
      allowNull: false
    }
  }, {
    tableName: 'situacao_boleto_banco'
  });
};
