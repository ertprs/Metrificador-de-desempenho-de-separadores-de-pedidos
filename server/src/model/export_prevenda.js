/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('export_prevenda', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Porta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Senha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Banco: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'export_prevenda'
  });
};
