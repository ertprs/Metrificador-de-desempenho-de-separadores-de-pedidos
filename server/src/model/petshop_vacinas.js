/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_vacinas', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ProximaDose: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Um: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    EspecieIndicada: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Observacoes: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    PrincipioAtivo: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    tableName: 'petshop_vacinas'
  });
};
