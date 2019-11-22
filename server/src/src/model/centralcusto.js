/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('centralcusto', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqParent: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Nivel: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    IsParent: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CodigoExibicao: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    SeqDepartamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    SeqMestre: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IsMestre: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'centralcusto'
  });
};
