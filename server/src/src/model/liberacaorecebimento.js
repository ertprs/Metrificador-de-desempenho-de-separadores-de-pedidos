/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('liberacaorecebimento', {
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
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeVendedor: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Limite: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorEmAberto: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorBaixa: {
      type: "DOUBLE",
      allowNull: true
    },
    PercDesconto: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorDesconto: {
      type: "DOUBLE",
      allowNull: true
    },
    Liberado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    UsuarioLiberou: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataHoraLiberacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Motivo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ValorTitulos: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'liberacaorecebimento'
  });
};
