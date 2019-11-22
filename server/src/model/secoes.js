/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('secoes', {
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
    PesoMedio: {
      type: "DOUBLE",
      allowNull: true
    },
    magento_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ModeloImpressora: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EnderecoImpressora: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UltimaAlteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    tableName: 'secoes'
  });
};
