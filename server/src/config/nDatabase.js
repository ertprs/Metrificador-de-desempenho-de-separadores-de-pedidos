// LOCAL DE ARMAZENAMENTO DAS CREDENCIAIS DA MINHA BASE DE DADOS
module.exports = {
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT+3',
      },
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123',
    database: 'famartapi',
    define: {
     
    }
}