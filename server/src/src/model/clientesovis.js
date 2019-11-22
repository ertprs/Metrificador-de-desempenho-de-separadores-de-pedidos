/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientesovis', {
    IDCLIENTE: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: '0'
    },
    IDCIDADE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDSITUACAO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDCOLABORADOR: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDREGIAO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDATIVIDADE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NOME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RSOCIAL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ENDERECO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BAIRRO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IERG: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CNPJCPF: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    TELEFONE: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    FAX: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CELULAR: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DATANASCIMENTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    OBSCADASTRAL: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    OBSFINANCEIRA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IDTABPRECO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDTABPRECOTROCA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDTABPRECOBONIFICACAO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDFORMAPAGTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDPRAZOPAGTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DATAHORACADASTROPDA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    END_NUMERO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    LONGITUDE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LATITUDE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EMAILNFE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ESTRANGEIRO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DATAHORA_RECEPCAO_CLIENTE: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    tableName: 'clientesovis'
  });
};
