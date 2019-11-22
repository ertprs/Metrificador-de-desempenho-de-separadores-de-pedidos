/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfse_lote', {
    sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nf: {
      type: DataTypes.INTEGER(15),
      allowNull: true,
      defaultValue: '0'
    },
    idOS: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: '0'
    },
    idCliente: {
      type: DataTypes.INTEGER(15),
      allowNull: true,
      defaultValue: '0'
    },
    retornows: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    StatusNfse: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'nfse_lote'
  });
};
