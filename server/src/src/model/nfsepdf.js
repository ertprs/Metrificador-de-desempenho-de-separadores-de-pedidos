/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfsepdf', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoNota: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    PDF: {
      type: "LONGBLOB",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'nfsepdf'
  });
};
