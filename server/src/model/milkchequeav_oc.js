/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkchequeav_oc', {
    Id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idSeqAvulso: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    idOcorrencia: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    DescOcorrencia: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'milkchequeav_oc'
  });
};
