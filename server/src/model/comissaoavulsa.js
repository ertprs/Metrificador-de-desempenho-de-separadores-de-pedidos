/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comissaoavulsa', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IdVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ValorComissao: {
      type: "DOUBLE",
      allowNull: false
    },
    PercComissao: {
      type: "DOUBLE",
      allowNull: false
    },
    Baixado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Lote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Excluido: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    DtExcluido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Us_Terminal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    id_CP: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'comissaoavulsa'
  });
};
