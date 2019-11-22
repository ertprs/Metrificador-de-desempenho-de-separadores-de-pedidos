/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locacao_locacao', {
    loc_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    loc_datahorainicial: {
      type: DataTypes.DATE,
      allowNull: true
    },
    loc_codigocliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    loc_codigovendedor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    loc_status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    loc_codigomodalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    loc_valortotal: {
      type: "DOUBLE",
      allowNull: true
    },
    loc_tipofaturamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    loc_responsavel: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    loc_observacao: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    loc_valorgarantia: {
      type: "DOUBLE",
      allowNull: true
    },
    loc_codigoparcelamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    loc_juros: {
      type: "DOUBLE",
      allowNull: true
    },
    loc_desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    loc_usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    loc_terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    loc_proximofaturamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    loc_razaocliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    loc_osgerada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    loc_diasProximoFaturamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    loc_emitenf: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    loc_faturanf: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    loc_fatura: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    loc_banco: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    loc_agencia: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    loc_numcheque: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    loc_conta: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    loc_empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    loc_datahoraentrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    loc_datahoraretorno: {
      type: DataTypes.DATE,
      allowNull: true
    },
    loc_osmanual: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    loc_vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    loc_enderecoEntrega: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    loc_bairroEntrega: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    loc_cidadeEntrega: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    loc_numeroEntrega: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    loc_ComplementoEntrega: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    loc_IndexEnderecoEntrega: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    loc_valordevolvido: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    loc_codigocategoria: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    loc_ultimofaturamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    loc_usuariodevolvendo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    loc_terminaldevolvendo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    loc_codigodevolucao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'locacao_locacao'
  });
};
