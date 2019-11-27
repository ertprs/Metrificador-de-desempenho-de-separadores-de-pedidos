

const { Model, DataTypes } = require('sequelize');

class dadosAPImetrica extends Model {
    static init(sequelize) {
        super.init({ 

          NumeroPedido: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            defaultValue: '0',
            primaryKey: true
          },
          CodigoCliente: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          /* Telefone1: {
            type: DataTypes.STRING(150),
            allowNull: true
          }, */
          RazaoCliente: {
            type: DataTypes.STRING(100),
            allowNull: true
          },
          FormaParcelamento: {
            type: DataTypes.STRING(75),
            allowNull: true
          },
          Data: {
            type: DataTypes.DATEONLY,
            allowNull: true
          },
          Hora: {
            type: DataTypes.TIME,
            allowNull: true
          },
          /* CodigoVendedor: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          }, */
          Vendedor: {
            type: DataTypes.STRING(100),
            allowNull: true
          },
          ModalidadeCB: {
            type: DataTypes.STRING(25),
            allowNull: true
          },
          /* Cidade: {
            type: DataTypes.STRING(150),
            allowNull: true
          }, */
          Separador: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
          ErrosSeparador: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          Conferente: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
          ErrosConferentes: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          Itens: {
            type: DataTypes.STRING(5),
            allowNull: true
          },
          QtdTotal: {
            type: DataTypes.STRING(10),
            allowNull: true
          }            
        }, {
            sequelize,
            tableName: 'dadosAPImetrica',
            timestamps: false
        })
    }
}

module.exports = dadosAPImetrica;