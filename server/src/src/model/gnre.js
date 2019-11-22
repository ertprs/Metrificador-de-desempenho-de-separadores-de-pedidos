/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gnre', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodReceita: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NControle: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Convenio: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Produto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TipoDocumento: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Periodo_Ref: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    Parcela: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    LinhaDigitavel: {
      type: DataTypes.STRING(48),
      allowNull: true
    },
    CodigoBarras: {
      type: DataTypes.STRING(44),
      allowNull: true
    },
    InfoComplementar: {
      type: DataTypes.STRING(355),
      allowNull: true
    },
    TipoGuia: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: 'ICMS-ST'
    },
    TipoDoc: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: 'NFE'
    },
    TipoUFDest: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'gnre'
  });
};
