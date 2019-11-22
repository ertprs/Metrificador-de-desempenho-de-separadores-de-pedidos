/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operadoracartao', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Bandeira: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NEstabelecimento: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UltimaAlteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    TipoCompartilhamento: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CodigoAdquirente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'operadoracartao'
  });
};
