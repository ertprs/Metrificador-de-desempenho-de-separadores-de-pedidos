/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctrc_saidas_itens_servico', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idCtrc: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    idServico: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Descricao_Servico: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Valor_Servico: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Cidade_Origem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Cidade_Destino: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Placa: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    UFPlaca: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    tableName: 'ctrc_saidas_itens_servico'
  });
};
