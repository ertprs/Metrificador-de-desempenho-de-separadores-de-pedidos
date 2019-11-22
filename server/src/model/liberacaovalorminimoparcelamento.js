/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('liberacaovalorminimoparcelamento', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    IDParcelamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    },
    Terminal: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    },
    DataHoraLiberacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Liberado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Motivo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorVenda: {
      type: "DOUBLE",
      allowNull: true
    },
    UsuarioLiberou: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'liberacaovalorminimoparcelamento'
  });
};
