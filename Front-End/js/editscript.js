var token = localStorage.getItem("CGauthtoken");

function logout(){
    localStorage.setItem("CGauthtoken", undefined);
    window.location.assign("./index.html");          
}

function limpaauth(error){

    if( error == 'Request failed with status code 511'){
        alert('Favor faça Login novamente');
        localStorage.setItem("CGauthtoken", undefined);
        window.location.assign("./index.html");          
    
    }

    
}

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
    $("#inputData").val(undefined);
    $("#inputHora").val(undefined);
    $("#inputitens").val(undefined);
    $("#inputQTDtotal").val(undefined);
    $("#separador").val(undefined);
    $("#errosseparador").val(undefined);
    $("#conferente").val(undefined);
    $("#erroconferentes").val(undefined);


};

async function busca(param){

    axios.get(
        `http://localhost:3001/dadosMetrica/${param}`, {
            headers: { 'x-access-token': token }
        })
        .then(function(response){

            total = 0;
             response.data.forEach(element => {
                total += Number(element.QtdTotal);
             });
             
            $("#inputCliente").val(response.data[0].CodigoCliente);
            $("#inputFantasia").val(response.data[0].RazaoCliente);
            $("#inputFPg").val(response.data[0].ModalidadeCB);
            $("#inputFP").val(response.data[0].FormaParcelamento);
            $("#inputVendedor").val(response.data[0].Vendedor);
            $("#inputCliente").val(response.data[0].CodigoCliente);
            $("#inputData").val(response.data[0].Data);
            $("#inputHora").val(response.data[0].Hora);
            $("#separador").val(response.data[0].Separador);
            $("#errosseparador").val(response.data[0].ErrosSeparador);
            $("#conferente").val(response.data[0].Conferente);
            $("#inputitens").val(response.data.length);
            $("#inputQTDtotal").val(total);

           
          }).catch(function (error){
            limpaauth(error.message);  
              console.error(error)
    
          })
    
        }

        async function update(){
         
            axios.put(`http://localhost:3001/update/dadosMetrica/`,{
               
                NumeroPedido: $("#inputNPedido").val(),
                ErrosConferentes: $("#erroconferentes").val()

            }, {
                headers: { 'x-access-token': token }
            }).then(function (response){
                console.log(response)
                $(".mensagem").empty();
                $(".mensagem").append(`
                <div class="alert alert-success alert-dismissible fade show">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Dados salvo com sucesso.</strong>
                </div>
                
                `);
                limparcampos();

            }).catch(function (error){
                limpaauth(error.message);  
                console.error(error);
                $(".mensagem").empty();
                $(".mensagem").append(`
                <div class="alert alert-danger alert-dismissible fade show">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Houve um erro, verifique os dados e tente novamente.</strong>
                </div>
                
                `);
            })
        }