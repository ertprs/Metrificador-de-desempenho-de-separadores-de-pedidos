/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('remessa_folhapagamento', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: false
    },
    Qtde: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Total: {
      type: "DOUBLE(11,2)",
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
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
    tableName: 'remessa_folhapagamento'
  });
};
