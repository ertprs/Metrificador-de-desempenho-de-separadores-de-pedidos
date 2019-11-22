/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('boletos_instrucao', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqCR: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IdBlq: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Banco: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NossoNumero: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DvNossoNumero: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NovoVencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Instrucao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataLancamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraLancamento: {
      type: DataTypes.TIME,
      allowNull: true
    },
    IDRemessa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataDesconto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TipoDesconto: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ValorDesconto: {
      type: "DOUBLE(11,2)",
      allowNull: true
    }
  }, {
    tableName: 'boletos_instrucao'
  });
};
