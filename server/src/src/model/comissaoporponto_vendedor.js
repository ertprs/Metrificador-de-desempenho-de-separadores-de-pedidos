/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comissaoporponto_vendedor', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodComissaoGeral: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    CodVendedor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    ValorVenda: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Pontos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    AliquotaComissao: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Status: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'comissaoporponto_vendedor'
  });
};
