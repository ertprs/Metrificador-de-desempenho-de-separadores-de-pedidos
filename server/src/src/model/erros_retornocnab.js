/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('erros_retornocnab', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NossoNumero: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DvNossoNumero: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoRetorno: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodMovimento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Arquivo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    idLote: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SEQ_CR: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'erros_retornocnab'
  });
};
