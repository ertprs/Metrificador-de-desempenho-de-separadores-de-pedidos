/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('naovendasovis', {
    IdNaoVenda: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IdUsuarioErp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    IdClienteErp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    RSocial: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: '0'
    },
    NomeCidade: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '0'
    },
    TelefoneCliente: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '0'
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '0'
    },
    DataVisita: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IdMotivoNaoVenda: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    IdEmpresaErp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    Contato: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '0'
    },
    Mensagem: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: '0'
    },
    lido: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    DATAHORA_RECEPCAO_NAOVENDA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    tableName: 'naovendasovis'
  });
};
