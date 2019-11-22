use famart;
select * from produtos where codigo = 187;

select * from produtosestoque where Codigo = 187;



create view pedidosapi as select pedidosvenda.codigo as "Numero_pedido", pedidosvenda.CodigoCliente, pedidosvenda.Telefone1,pedidosvenda.RazaoCliente, pedidosvenda.FormaParcelamento, pedidosvenda.Data, pedidosvenda.Hora, pedidosvenda.CodigoVendedor, pedidosvenda.Vendedor, pedidosvenda.ModalidadeCB, pedidosvenda.Cidade from famart.pedidosvenda;

create view produtosapi as select pedidosvendaprodutos.CodigoPedido, produtos.`Codigo` as "Codigo_produto", produtos.`Referencia`,produtos.`Descricao`,produtos.`Fabricante`,produtos.`Parteleira`as "Prateleira",pedidosvendaprodutos.`UNVenda`, pedidosvendaprodutos.`Quantidade` from famart.produtos,famart.pedidosvendaprodutos  where produtos.`Codigo` = pedidosvendaprodutos.`CodigoProduto` ;


select * from famart.pedidosapi;

select * from famart.produtosapi;

-- pesquisa dos dados do pedido view 1
select pedidosvenda.codigo as "Numero_pedido", pedidosvenda.CodigoCliente, pedidosvenda.Telefone1,pedidosvenda.RazaoCliente, pedidosvenda.FormaParcelamento, pedidosvenda.Data, pedidosvenda.Hora, pedidosvenda.CodigoVendedor, pedidosvenda.Vendedor, pedidosvenda.ModalidadeCB, pedidosvenda.Cidade from famart.pedidosvenda;


-- pesquisa dos produtos do pedido view 2
select pedidosvendaprodutos.CodigoPedido, produtos.`Codigo` as "Codigo_produto", produtos.`Referencia`,produtos.`Descricao`,produtos.`Fabricante`,produtos.`Parteleira`as "Prateleira",pedidosvendaprodutos.`UNVenda`, pedidosvendaprodutos.`Quantidade` from famart.produtos,famart.pedidosvendaprodutos  where produtos.`Codigo` = pedidosvendaprodutos.`CodigoProduto` ;









select pedidosvendaprodutos.`UNVenda`, pedidosvendaprodutos.`Quantidade` from famart.pedidosvendaprodutos where pedidosvendaprodutos.`CodigoProduto` = 1938 && pedidosvendaprodutos.`CodigoPedido` = 90269;




select pedidosvenda.codigo as "Numero_pedido", pedidosvenda.CodigoCliente, pedidosvenda.Telefone1,pedidosvenda.RazaoCliente, pedidosvenda.FormaParcelamento, pedidosvenda.Data, pedidosvenda.Hora, pedidosvenda.CodigoVendedor, pedidosvenda.Vendedor, pedidosvenda.ModalidadeCB, pedidosvenda.Cidade,produtos.`Codigo` as "Codigo_produto", produtos.`Referencia`,produtos.`Descricao`,produtos.`Fabricante`,produtos.`Parteleira`as "Prateleira",pedidosvendaprodutos.`UNVenda`, pedidosvendaprodutos.`Quantidade` from famart.pedidosvenda, famart.produtos,famart.pedidosvendaprodutos;