/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupos', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    CodigoSecao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DescricaoSecao: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    PesoMedio: {
      type: "DOUBLE",
      allowNull: true
    },
    IDFornecedorPadrao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    magento_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UltimaAlteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    tableName: 'grupos'
  });
};
