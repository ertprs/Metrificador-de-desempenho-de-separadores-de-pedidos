/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locacao_faturamento', {
    Loc_Fat_Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Loc_Fat_CodigoLocacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Loc_Fat_CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Loc_Fat_DataFaturamento: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    Loc_Fat_DataAtualizacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    Loc_Fat_Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Loc_Fat_Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Loc_Fat_Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Loc_Fat_SequenciaDevolucao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'locacao_faturamento'
  });
};
