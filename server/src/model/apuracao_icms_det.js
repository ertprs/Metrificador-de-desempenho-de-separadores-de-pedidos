/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apuracao_icms_det', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataInicial: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DataFinal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Ajuste: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    D_C: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'apuracao_icms_det'
  });
};
