CREATE DATABASE famartapi;

use famartapi;

create table dadosAPImetrica(
`NumeroPedido` integer(10) unsigned primary key not null,
`CodigoCliente` integer(10) unsigned not null,
`RazaoCliente` varchar(100),
`FormaParcelamento` varchar(75),
`Data` date,
`Hora` time,
`Vendedor` varchar(100),
`ModalidadeCB` varchar(25),
`Separador` varchar(50),
`ErrosSeparador` varchar(3),
`Conferente` varchar(50),
`ErrosConferentes` varchar(3),
`Itens` varchar(5),
`QtdTotal` varchar(10)
);