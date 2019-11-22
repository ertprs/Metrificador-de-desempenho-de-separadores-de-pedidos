/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('integracoes_clientes', {
    ic_seq: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ic_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    ic_integracao: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    ic_tipo_cliente: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ic_nome_razao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ic_nome_fantasia: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    ic_cnpj: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    ic_ie: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ic_cpf: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    ic_rg: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ic_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ic_logradouro: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ic_numero: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ic_complemento: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    ic_bairro: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ic_cep: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    ic_uf: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ic_cidade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ic_telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ic_celular: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ic_importado: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    ic_pedido_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'integracoes_clientes'
  });
};
