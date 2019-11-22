/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_cliente', {
    tipo: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    grupo_cliente: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nome_fantasia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cnpf_cnpj: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    dt_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    state_registry: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    endereco: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    complemento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    cep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cidade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    is_supplier: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    id_loja: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    dt_ultima_alt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ddd_tel: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    tel: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    ramal: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    ddd_cel: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    cel: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    transaction_tax: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    }
  }, {
    tableName: 'v_yh_cliente'
  });
};
