/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('impressoras', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Venda: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Condicional: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Duplicata: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Recibo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Carne: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Venda_FolhaInteira: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Condicional_FolhaInteira: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    FechamentoCaixa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UserID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Duplicata_FolhaInteira: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    OS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Orcamento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Orcamento_FolhaInteira: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    AtendimentoCrm_FolhaInteira: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    PedidoCompras_folhaInteira: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Separacao_folhainteira: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Recibo_FolhaInteira: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    DuplicataPromissoriaCarneBoleto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    OS_FolhaInteira: {
      type: DataTypes.INTEGER(1).UNSIGNED.ZEROFILL,
      allowNull: true
    },
    PreVenda: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Geracao_FolhaInteira: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Carne_FolhaInteira: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'impressoras'
  });
};
