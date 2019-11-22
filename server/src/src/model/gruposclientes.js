/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gruposclientes', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Fator: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    DataCadastro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataAlteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    UltimaExecucao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pComissao: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    }
  }, {
    tableName: 'gruposclientes'
  });
};
