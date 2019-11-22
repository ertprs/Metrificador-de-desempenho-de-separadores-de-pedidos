/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_consultas_produtos', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    PDesconto: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoConsulta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorUnitario: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTabela: {
      type: "DOUBLE",
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PrincipioAtivo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ViaAplicacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'petshop_consultas_produtos'
  });
};
