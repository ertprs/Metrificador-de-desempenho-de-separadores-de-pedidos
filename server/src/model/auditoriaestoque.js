/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auditoriaestoque', {
    DataHora: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    EstoqueAnterior: {
      type: "DOUBLE",
      allowNull: false
    },
    EstoqueAtual: {
      type: "DOUBLE",
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Tela_Anterior: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Operacao_Anterior: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Tela_Nova: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Operacao_nova: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    IDmov: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    QtdeVolumeAnterior: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeVolumeAtual: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'auditoriaestoque'
  });
};
