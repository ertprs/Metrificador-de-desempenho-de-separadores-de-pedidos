/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caixaprincipal', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Usuario: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Saldo: {
      type: "DOUBLE",
      allowNull: true
    },
    Caixa: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SaldoAnterior: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoCaixa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    MovPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'caixaprincipal'
  });
};
