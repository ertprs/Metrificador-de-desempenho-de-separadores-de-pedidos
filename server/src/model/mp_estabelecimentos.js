/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mp_estabelecimentos', {
    est_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    est_data_cadastro: {
      type: DataTypes.DATE,
      allowNull: false
    },
    est_status: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    est_descricao: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    est_endereco: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    est_numero: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    est_bairro: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    est_cep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    est_codigo_ibge: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    est_cidade: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    est_telefone: {
      type: DataTypes.STRING(12),
      allowNull: true
    }
  }, {
    tableName: 'mp_estabelecimentos'
  });
};
