
$("#inputNPedido").keydown(function(e){
    
        if(e.keyCode == 13 || e.keyCode == 9){
            let q = $("#inputNPedido").val();
            busca(q)
        e.preventDefault();
        }
})


async function busca(param){
axios.get('localhost:3001/pedidosapi/'+ param)
.then( function (res){
    console.log(res.data);
})



}