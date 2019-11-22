/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cte_inutilizados', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Chave: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Msg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NInutilizacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NumeroInicial: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NumeroFinal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Motivo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Modelo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '57'
    }
  }, {
    tableName: 'cte_inutilizados'
  });
};
