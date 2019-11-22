/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sintegra_invet', {
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
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    E/S: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ModalidadeControle: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'sintegra_invet'
  });
};
