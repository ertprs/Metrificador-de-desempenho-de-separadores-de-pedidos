/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mic_dta', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Numero: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: 'a'
    },
    Motorista_Codigo: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    Motorista_Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TransitoAduaneiro: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Partida_Pais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Partida_UF_Departamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Partida_Cidade_Distrito: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Destino_Pais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Destino_UF_Departamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Destino_Cidade_Distrito: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Veiculo_Codigo: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    Veiculo_Descricao: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Veiculo_Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Veiculo_Ano: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Veiculo_Marca: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Veiculo_Numero: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Veiculo_Capacidade: {
      type: "DOUBLE",
      allowNull: true
    },
    Veiculo_Engate: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Veiculo_Engate_Reboque: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    Veiculo_Engate_Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Substituto_Codigo: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    Substituto_Descricao: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Substituto_Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Substituto_Ano: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Substituto_Marca: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Substituto_Numero: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Substituto_Capacidade: {
      type: "DOUBLE",
      allowNull: true
    },
    Substituto_Engate: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Substituto_Engate_Reboque: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    Substituto_Engate_Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    RepTransportadora_Codigo: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    RepTransportadora_Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RepTransportadora_CPF: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    RepTransportadora_RG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RepTransportadora_Telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Despachante_Codigo: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    Despachante_RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Despachante_NumeroDTA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Despachante_Observacao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Veiculo_Frota: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Veiculo_Proprietario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Substituto_Frota: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Substituto_Proprietario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Despachante_Caminhao: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Volume_Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    Volume_PesoBruto: {
      type: "DOUBLE",
      allowNull: true
    },
    Valor_Mercadorias: {
      type: "DOUBLE",
      allowNull: true
    },
    Valor_Frete: {
      type: "DOUBLE",
      allowNull: true
    },
    Valor_Seguro: {
      type: "DOUBLE",
      allowNull: true
    },
    Motorista_CPF_CI: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Veiculo_Engate_Frota: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Veiculo_Proprietario_Documento: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Substituto_Engate_Frota: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Substituto_Proprietario_Documento: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'mic_dta'
  });
};
