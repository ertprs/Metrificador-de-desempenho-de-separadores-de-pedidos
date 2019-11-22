
$("#inputNPedido").keydown(function(e){
    
        if(e.keyCode == 13 || e.keyCode == 9){
            let q = $("#inputNPedido").val();
            busca(q)
        e.preventDefault();
        }
})


async function busca(param){

axios.get(
    `http://localhost:3001/pedidosapi/${param}`,
    {}
    )
    .then(function(response){

        console.log(response.data)
        $("#inputCliente").val(response.data[0].CodigoCliente);

        $("#inputFantasia").val(response.data[0].RazaoCliente);
        $("#inputFPg").val(response.data[0].ModalidadeCB);
        $("#inputFP").val(response.data[0].FormaParcelamento);
        $("#inputVendedor").val(response.data[0].Vendedor);
        $("#inputCliente").val(response.data[0].CodigoCliente);

        axios.get(
            `http://localhost:3001/produtosapi/${param}`,
            {}
            )
            .then(function(response){
                    console.log(response)
             let total = 0 ;
             response.data.forEach(element => {
                total += element.Quantidade;
             });
                
             $("#inputitens").val(response.data.length);
             $("#inputQTDtotal").val(total);

            console.log(total)

            }).catch(function (error){
                console.error(error)
            })
      }).catch(function (error){
          console.error(error)

      })

    }