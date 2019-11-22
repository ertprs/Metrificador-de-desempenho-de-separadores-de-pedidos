/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cenariofluxo', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Oculta_CMV: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Oculta_Comissao_prod: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Oculta_LucroLiquido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Oculta_Servicos_Prestado: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    Oculta_Comissao_Servicos: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    Oculta_Custo_Servico: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    Oculta_chkJurosSobreVenda: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    Oculta_chkTotalDeVendas: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    Oculta_chkVendaDeMercadoria: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    TotalizaGrupos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Oculta_CMC: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Oculta_CMP: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    BaseContasCenario: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    Oculta_IMV: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    EmpresaOrigemConta: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    DescontosNoLucroLiquido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cenariofluxo'
  });
};
