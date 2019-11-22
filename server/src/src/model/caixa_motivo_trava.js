/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caixa_motivo_trava', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    RazaoCliente: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Vendedor: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoCaixa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoAbertura: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Motivo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'caixa_motivo_trava'
  });
};
