/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_posicao_estoque', {
    Detalhamento: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Ativo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    CustoFinal: {
      type: "DOUBLE",
      allowNull: true
    },
    CodPro: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    DescricaoProd: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    Referencia: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Un: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    VendaT1: {
      type: "DOUBLE",
      allowNull: true
    },
    NCM: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ''
    },
    E/S: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ''
    },
    ModalidadeControle: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'temp_posicao_estoque'
  });
};
