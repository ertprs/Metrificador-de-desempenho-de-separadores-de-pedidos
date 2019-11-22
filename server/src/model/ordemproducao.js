/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordemproducao', {
    Codigo: {
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
    DataPrazo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NomeResponsavel: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Lote: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
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
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Situacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataProduzida: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TipoAgrupamento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ConsideraEstoque: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Auditado_Data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Auditado_Usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Auditado_Terminal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ProducaoPropria: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    DiasPrazo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDStatusOP: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'ordemproducao'
  });
};
