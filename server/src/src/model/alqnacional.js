/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alqnacional', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Mes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Ano: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Aliquota: {
      type: "DOUBLE",
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Alterado: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'alqnacional'
  });
};
