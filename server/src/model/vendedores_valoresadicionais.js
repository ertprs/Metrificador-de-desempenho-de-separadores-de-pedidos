/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendedores_valoresadicionais', {
    vva_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cva_CodigoVendedor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ca_MOTIVODEMISSAO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ca_PAGAMENTOADICIONAL: {
      type: "DOUBLE",
      allowNull: true
    },
    ca_AVALIACAOFUNCIONARIO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ca_DATAULTIMASFERIAS: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ca_EXAMEPERIODICO: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'vendedores_valoresadicionais'
  });
};
