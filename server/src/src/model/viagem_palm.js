/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('viagem_palm', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoRota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataSaida: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataChegada: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UltimoEnvio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UltimoRecebimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Tabela: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IDTabela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UltimoEnvio_Aparelho: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TransmissaoVendedor: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IDTabela2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tabela2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    IDTabela3: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tabela3: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    IDTabela4: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tabela4: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Envia_TodosClientes: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'viagem_palm'
  });
};
