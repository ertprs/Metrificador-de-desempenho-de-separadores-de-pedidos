/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('manifesto_detterceiro', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDManifesto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    NF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Remetente: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    Destinatario: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Peso: {
      type: "DOUBLE",
      allowNull: false
    },
    Total: {
      type: "DOUBLE",
      allowNull: false
    },
    Itens: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    QtdeVolume: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'manifesto_detterceiro'
  });
};
