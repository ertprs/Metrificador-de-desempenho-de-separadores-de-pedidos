// LOCAL DE ARMAZENAMENTO DAS CREDENCIAIS DA MINHA BASE DE DADOS
module.exports = {
    dialect: 'mariadb',
    host: 'localhost',
    port: '3308',
    username: 'root',
    password: '123',
    database: 'famart',
    define: {
        //timestamps: true,   //created_at, updated_at
        //underscored: true, //Nome das tabelas e das colunas no formato snake case createdAt -> created_at
    }
}

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });
