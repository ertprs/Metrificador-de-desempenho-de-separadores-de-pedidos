/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabela_ibpt', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NCM: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    EX: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    Tabela: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Aliq_Nacional: {
      type: "DOUBLE",
      allowNull: false
    },
    Aliq_Importado: {
      type: "DOUBLE",
      allowNull: false
    },
    Aliq_Federal: {
      type: "DOUBLE",
      allowNull: true
    },
    Aliq_Estadual: {
      type: "DOUBLE",
      allowNull: true
    },
    Aliq_Municipal: {
      type: "DOUBLE",
      allowNull: true
    },
    Versao: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    Chave: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    tableName: 'tabela_ibpt'
  });
};
