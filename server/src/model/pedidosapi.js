/* jshint indent: 2 */


const { Model, DataTypes } = require('sequelize');

class pedidosapi extends Model {
    static init(sequelize) {
        super.init({ 

          Numero_pedido: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            defaultValue: '0',
            primaryKey: true
          },
          CodigoCliente: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          Telefone1: {
            type: DataTypes.STRING(150),
            allowNull: true
          },
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
          CodigoVendedor: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
          },
          Vendedor: {
            type: DataTypes.STRING(100),
            allowNull: true
          },
          ModalidadeCB: {
            type: DataTypes.STRING(25),
            allowNull: true
          },
          Cidade: {
            type: DataTypes.STRING(150),
            allowNull: true
          }
             
        }, {
            sequelize,
            tableName: 'pedidosapi',
            timestamps: false
        })
    }
}

module.exports = pedidosapi;

/* module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidosapi', {
    Numero_pedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Telefone1: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
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
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Vendedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ModalidadeCB: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    tableName: 'pedidosapi'
  });
}; */
