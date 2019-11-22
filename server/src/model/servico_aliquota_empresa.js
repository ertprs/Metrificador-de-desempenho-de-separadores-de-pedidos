/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servico_aliquota_empresa', {
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoServico: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Aliquota: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'servico_aliquota_empresa'
  });
};
