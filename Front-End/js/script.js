
$("#inputNPedido").keydown(function(e){
    
        if(e.keyCode == 13 || e.keyCode == 9){
            let q = $("#inputNPedido").val();
            busca(q)
        e.preventDefault();
        }
})

function limparcampos(){
    $("#inputCliente").val(undefined);
    $("#inputNPedido").val(undefined);
    $("#inputFantasia").val(undefined);
    $("#inputFPg").val(undefined);
    $("#inputFP").val(undefined);
    $("#inputVendedor").val(undefined);
    $("#inputCliente").val(undefined);
    $("#inputData").val(undefined)
    $("#inputHora").val(undefined)
    $("#inputitens").val(undefined)
    $("#inputQTDtotal").val(undefined)
    $("#separador").val(undefined)
    $("#errosseparador").val(undefined)


};

async function busca(param){

axios.get(
    `http://localhost:3001/pedidosapi/${param}`)
    .then(function(response){

        console.log(response.data)
        $("#inputCliente").val(response.data[0].CodigoCliente);

        $("#inputFantasia").val(response.data[0].RazaoCliente);
        $("#inputFPg").val(response.data[0].ModalidadeCB);
        $("#inputFP").val(response.data[0].FormaParcelamento);
        $("#inputVendedor").val(response.data[0].Vendedor);
        $("#inputCliente").val(response.data[0].CodigoCliente);
        $("#inputData").val(response.data[0].Data)
        $("#inputHora").val(response.data[0].Hora)
        //response.data[0].Hora

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
          $(".mensagem").append(`
            <div class="alert alert-danger alert-dismissible fade show">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Houve um erro, verifique a sua conexao de rede e tente novamente.</strong>
            </div>
            
            `);

      })

    }


    async function salvar(){


        axios.post(`http://localhost:3001/create/dadosMetrica`,{

            "NumeroPedido" : $("#inputNPedido").val(),
            "CodigoCliente": $("#inputCliente").val(),
            "RazaoCliente": $("#inputFantasia").val(),
            "ModalidadeCB": $("#inputFPg").val(),
            "FormaParcelamento": $("#inputFP").val(),
            "Vendedor": $("#inputVendedor").val(),
           "Data": $("#inputData").val(),
            "Hora": $("#inputHora").val(),
            "Itens": $("#inputitens").val(),
            "QtdTotal": $("#inputQTDtotal").val(),
            "Separador":  $("#separador").val(),
            "ErrosSeparador": $("#errosseparador").val(),
            "Conferente": 'conferido'

        }).then(function (response){
            console.log(response);
            $(".mensagem").empty();
            $(".mensagem").append(`
            <div class="alert alert-success alert-dismissible fade show">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Dados salvo com sucesso.</strong>
            </div>
            
            `);
            limparcampos();
            
        }).catch(function (error){
            console.error(error);
            $(".mensagem").empty();
            $(".mensagem").append(`
            <div class="alert alert-danger alert-dismissible fade show">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Houve um erro, verifique os dados e tente novamente.</strong>
            </div>
            
            `);
            alert("Errou")
        })
    }