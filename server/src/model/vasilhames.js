/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vasilhames', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Exclusao_usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Exclusao_datahora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Exclusao_terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'vasilhames'
  });
};
