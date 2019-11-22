/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cheque_custodia_cheques', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_REMESSA: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CAMARA: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    BANCO: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    AGENCIA: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    C1: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    CONTA: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    C2: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    CHEQUE: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    C3: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    VALOR: {
      type: "DOUBLE",
      allowNull: false
    },
    CPF: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    IDCheque: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Tipificacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '5'
    },
    DataPre: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'cheque_custodia_cheques'
  });
};
