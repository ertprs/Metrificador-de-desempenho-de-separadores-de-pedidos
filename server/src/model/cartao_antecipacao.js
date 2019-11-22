/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cartao_antecipacao', {
    can_sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    can_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    can_hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    can_valor_bruto: {
      type: "DOUBLE",
      allowNull: true
    },
    can_valor_taxa: {
      type: "DOUBLE",
      allowNull: true
    },
    can_perc_taxa: {
      type: "DOUBLE",
      allowNull: true
    },
    can_valor_liquido: {
      type: "DOUBLE",
      allowNull: true
    },
    can_usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    can_terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    can_empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    can_conta_antecipado: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'cartao_antecipacao'
  });
};
