
$("#inputNPedido").keydown(function(e){
    
    if(e.keyCode == 13 || e.keyCode == 9){
        let q = $("#inputNPedido").val();
        busca(q)
    e.preventDefault();
    }
})

async function busca(param){

    axios.get(
        `http://localhost:3001/dadosMetrica/${param}`)
        .then(function(response){

            let total;
            Number(total);
             response.data.forEach(element => {
                total += element.QtdTotal;
             });



            console.log(response.data)
            $("#inputCliente").val(response.data[0].CodigoCliente);
    
            $("#inputFantasia").val(response.data[0].RazaoCliente);
            $("#inputFPg").val(response.data[0].ModalidadeCB);
            $("#inputFP").val(response.data[0].FormaParcelamento);
            $("#inputVendedor").val(response.data[0].Vendedor);
            $("#inputCliente").val(response.data[0].CodigoCliente);
            $("#inputData").val(response.data[0].Data);
            $("#inputHora").val(response.data[0].Hora);
            //response.data[0].Hora
            $("#separador").val(response.data[0].Separador);
            $("#errosseparador").val(response.data[0].ErrosSeparador);
            $("#conferente").val(response.data[0].Conferente);
            $("#inputitens").val(response.data.length);
            $("#inputQTDtotal").val(total);

           
          }).catch(function (error){
              console.error(error)
    
          })
    
        }

        async function update(){
            q = $("#inputNPedido").val();
            axios.patch(`http://localhost:3001/update/dadosMetrica/`+q,{

               
               
                ErrosConferentes: $("#errosconferente").val()

            }).then(function (response){
                console.log(response);
                alert("PLIM Atualizouuu")
            }).catch(function (error){
                console.error(error);
                alert("Errou")
            })
        }