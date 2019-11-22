/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vasilhamesitens', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    VasilhamesSequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoVasilhame: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    QtdeUtilizada: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    QtdeEmprestimo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    QtdeGerada: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    QtdeDevolvida: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    QtdeDevolvidaB: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'vasilhamesitens'
  });
};
