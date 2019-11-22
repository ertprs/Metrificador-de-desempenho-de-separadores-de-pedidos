/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campanhas_produtos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodCampanha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodProd: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodTabela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Preco: {
      type: "DOUBLE",
      allowNull: false
    },
    AlteradoEm: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    tableName: 'campanhas_produtos'
  });
};
