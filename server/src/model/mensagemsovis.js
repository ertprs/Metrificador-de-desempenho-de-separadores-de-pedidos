/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mensagemsovis', {
    IDMENSAGEM: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    IDUSUARIO: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IDMENSAGEMEMITENTE: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DATAHORA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    DATAHORAINC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Lido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'mensagemsovis'
  });
};
