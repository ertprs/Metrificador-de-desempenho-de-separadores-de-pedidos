/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_consultas', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeCliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoAnimal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeAnimal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Consulta: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    Idade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DataReconsulta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    CodigoVeterinario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Veterinario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Horario: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Comportamento: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    SequenciaExame: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoOs: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'petshop_consultas'
  });
};
