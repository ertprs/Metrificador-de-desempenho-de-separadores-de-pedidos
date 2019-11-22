/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notaspandolfi', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqNota: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Recibo: {
      type: "LONGBLOB",
      allowNull: true
    },
    NFe_XML: {
      type: "LONGBLOB",
      allowNull: true
    },
    NFe_Danfe: {
      type: "LONGBLOB",
      allowNull: true
    },
    OBS: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'notaspandolfi'
  });
};
