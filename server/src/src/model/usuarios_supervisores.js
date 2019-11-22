/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios_supervisores', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoFuncionario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    Lib_Desconto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Lib_Credito: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Lib_Separacao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Lib_PDV_Canc_Cupom: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Lib_PDV_Item_Geral: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Lib_PDV_Canc_Item: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    FingerPrint: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Lib_PDV_Caixa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Lib_RemocaoItensVendas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Lib_MaximoDesconto: {
      type: "DOUBLE",
      allowNull: true
    },
    Lib_AbreGaveta: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Lib_PDV_RecebeAlertaSangria: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Lib_FormaParcelamento: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Lib_PDV_LiberacaoSangria: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Lib_Acrescimo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Lib_MaximoAcrescimo: {
      type: "DOUBLE",
      allowNull: true
    },
    Lib_PDV_CancelaSangria: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Lib_PDV_DescontoCR: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'usuarios_supervisores'
  });
};
