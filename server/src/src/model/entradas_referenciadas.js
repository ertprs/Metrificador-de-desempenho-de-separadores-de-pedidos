/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entradas_referenciadas', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoEntrada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MESANO: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    MODELO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SERIE: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ECF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Chave: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Cnpj: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ECF_SERIAL: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DataEmissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'entradas_referenciadas'
  });
};
