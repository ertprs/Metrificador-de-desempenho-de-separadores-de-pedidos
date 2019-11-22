/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidosclienteceicom', {
    pcc_pce_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    pcc_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    pcc_nome: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcc_cpf: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pcc_email: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcc_endereco: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcc_numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    pcc_bairro: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PCC_COMPLEMENTO: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    pcc_cep: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    pcc_cidade: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcc_estado: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pcc_pais: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    pcc_telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    pcc_celular: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    pcc_rg: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pcc_data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'pedidosclienteceicom'
  });
};
