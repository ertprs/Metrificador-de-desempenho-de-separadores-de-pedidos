/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_loja', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    nome_fantasia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    razao_social: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    cnpj: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    endereco: {
      type: DataTypes.STRING(50),
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
    cep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cnae: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    dt_ultima_alt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    segmento: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ''
    },
    canal: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ''
    },
    grupo: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'v_yh_loja'
  });
};
