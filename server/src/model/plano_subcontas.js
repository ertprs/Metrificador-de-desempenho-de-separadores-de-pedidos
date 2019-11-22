/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plano_subcontas', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDConta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ContaAtalho: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    ContaExportacao: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    ContaCreditoCordilheira: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ContaDebitoCordilheira: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TpDeducaoIRPJ: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Excluido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    User_Exclusao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Terminal_Exclusao: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'plano_subcontas'
  });
};
