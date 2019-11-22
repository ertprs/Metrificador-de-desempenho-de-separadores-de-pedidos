/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cobrancas_cheques', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Banco: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Agencia: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NConta: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Ncheque: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    DataPre: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataCadastro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IDCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoMovForma: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Nlote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Origem: {
      type: DataTypes.STRING(75),
      allowNull: true
    }
  }, {
    tableName: 'cobrancas_cheques'
  });
};
