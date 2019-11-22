/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notassaidas_referenciadas', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SequenciaNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Modelo: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Chave: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    MesAno: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ECF: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DataEmissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    SerialECF: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    tableName: 'notassaidas_referenciadas'
  });
};
