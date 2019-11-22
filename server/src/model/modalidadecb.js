/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modalidadecb', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Boleto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ModalidadePadrao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    MyMobile: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Fator: {
      type: "DOUBLE",
      allowNull: true
    },
    UltimaExecucao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'modalidadecb'
  });
};
