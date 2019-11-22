/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promocao_forma_parcelamento', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqPromocao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IDFormaParcelamento: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'promocao_forma_parcelamento'
  });
};
