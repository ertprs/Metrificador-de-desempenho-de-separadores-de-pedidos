CREATE DATABASE famartapi;


create table dadosAPImetrica(
CodigoPedido integer (10) unsigned  primary key not null,
Codigo_produt integer (3) unsigned not null,
Referencia varchar (30),
Descricao varchar (120),
Fabricante varchar (30),
Prateleira varchar (50),
UNVenda varchar (3),
Quantidade double

);