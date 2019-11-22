/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventario', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Cancelado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    TpCusto: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    Operacao: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    CodigoOperacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    AtualizaSecaoGrupoSubGrupo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ConsideraQtdePreVenda: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'inventario'
  });
};
