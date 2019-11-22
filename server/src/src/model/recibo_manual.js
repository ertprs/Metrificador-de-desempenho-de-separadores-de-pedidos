/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recibo_manual', {
    Nrecibo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TIPO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Emitente_Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Emitente_endereco: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Emitente_bairro: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Emitente_Cidade: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    Emitente_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    RecebemosDe: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Referentea: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Emitente_fantasia: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Emitente_CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Emitente_IE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RecebemosNomeFantasia: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    RecebemosEndereco: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RecebemosBairro: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    RecebemosCidade: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    RecebemosUF: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    tableName: 'recibo_manual'
  });
};
