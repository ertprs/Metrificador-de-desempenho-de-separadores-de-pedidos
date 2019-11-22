/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('retornoboletos_detalhes', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDRetorno: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    SeqCR: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NossoNumero: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    DVNossoNumero: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NumeroDoc: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    NF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Valor: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'retornoboletos_detalhes'
  });
};
