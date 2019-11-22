/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('valecompra_historicouso', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDValeCompra: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorUsado: {
      type: "DOUBLE",
      allowNull: true
    },
    MovPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    EmpresaBaixou: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'valecompra_historicouso'
  });
};
