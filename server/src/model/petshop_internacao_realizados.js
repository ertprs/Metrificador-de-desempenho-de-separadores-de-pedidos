/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_internacao_realizados', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    CodigoVacina: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    ViaAplicacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SequenciaInternacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'petshop_internacao_realizados'
  });
};
