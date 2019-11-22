/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mapaseparacao', {
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Qtde: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Ref: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Total: {
      type: "DOUBLE",
      allowNull: true
    },
    ObsProduto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'mapaseparacao'
  });
};
