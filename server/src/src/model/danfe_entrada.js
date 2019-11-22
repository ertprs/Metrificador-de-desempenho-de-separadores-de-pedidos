/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('danfe_entrada', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Chave: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    E_Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    E_Endereco: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    E_Numero: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    E_bairro: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    E_Cidade: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    E_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    E_CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    E_IE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    N_NatOP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    N_Autorizacao: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    N_DataAutorizacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    D_Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    D_CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    D_Endereco: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    D_Numero: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    D_Bairro: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    D_Cep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    D_Cidade: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    D_Fone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    D_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    D_IE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    N_DataEmissao: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    N_DataSaida: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    N_TotalBaseIcms: {
      type: "DOUBLE",
      allowNull: true
    },
    N_TotalIcms: {
      type: "DOUBLE",
      allowNull: true
    },
    N_TotalBaseIcms_ST: {
      type: "DOUBLE",
      allowNull: true
    },
    N_TotalIcms_ST: {
      type: "DOUBLE",
      allowNull: true
    },
    N_TotalPis: {
      type: "DOUBLE",
      allowNull: true
    },
    N_TotalCofins: {
      type: "DOUBLE",
      allowNull: true
    },
    N_TotalProdutos: {
      type: "DOUBLE",
      allowNull: true
    },
    N_TotalFrete: {
      type: "DOUBLE",
      allowNull: true
    },
    N_TotalSeguro: {
      type: "DOUBLE",
      allowNull: true
    },
    N_TotalDesconto: {
      type: "DOUBLE",
      allowNull: true
    },
    N_TotalOutrasDespesas: {
      type: "DOUBLE",
      allowNull: true
    },
    N_TotalIPI: {
      type: "DOUBLE",
      allowNull: true
    },
    N_TotalNF: {
      type: "DOUBLE",
      allowNull: true
    },
    T_TipoFrete: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    T_Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    T_Placa: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    T_UFPlaca: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    T_CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    T_IE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    T_Endereco: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    T_Cidade: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    T_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    T_Qtde: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    T_Especie: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    T_Marca: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    T_Numero: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    T_PesoB: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    T_PesoL: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    N_Observacao: {
      type: DataTypes.STRING(5000),
      allowNull: true
    }
  }, {
    tableName: 'danfe_entrada'
  });
};
