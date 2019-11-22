/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campanha_promocional', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    DataInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DataFim: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Valor: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    TextoExtra: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TipoCampanha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    TipoCampanhaFabricante: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Finalizado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'campanha_promocional'
  });
};
