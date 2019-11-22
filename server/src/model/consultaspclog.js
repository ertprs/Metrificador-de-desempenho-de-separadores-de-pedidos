/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('consultaspclog', {
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
    Terminal: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    TipoConsulta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CNPJCPF: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SPC_User: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'consultaspclog'
  });
};
