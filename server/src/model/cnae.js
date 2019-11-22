/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cnae', {
    idCnae: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CNAE: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(165),
      allowNull: false
    },
    ML: {
      type: "DOUBLE",
      allowNull: false
    },
    PCTM: {
      type: "DOUBLE",
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Alteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Versao: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    tableName: 'cnae'
  });
};
