// LOCAL DE ARMAZENAMENTO DAS CREDENCIAIS DA MINHA BASE DE DADOS
module.exports = {
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT+3',
      },
    host: 'localhost',
    // porta alberto 3308 minha 3306
    port: '3306',
    username: 'root',
    password: '123',
    // meu 123 -- alberto alberto1995
    database: 'famart',
    define: {
        //timestamps: true,   //created_at, updated_at
        //underscored: true, //Nome das tabelas e das colunas no formato snake case createdAt -> created_at
    }
}