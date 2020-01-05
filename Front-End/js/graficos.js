// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

var separadores = ["JONATAS", "MICHEL", "GUILHERME", "RODRIGO", "EDMILSON", "DANIEL", "JHONNY", "JOSEPH", "THIAGO", "PAULO", "PAULO V.", "CARLOS", "MATHEUS A", "FERNANDO", "JOERBE", "PATRICK", "IVAN", "MARILIA"]

function limpardiv() {
    $("#desenhaGrafico").empty();
}

async function graficoColunas() {

       
        if($("#sel1").val() == "Pedidos"  && $("#datainicio").val() !== ""  && $("#datafinal").val() !== ""){

        let pedidosSeparados = [];

         axios.get('http://localhost:3001/dados/Pedidos/Separados', {
            params:{
            dataInicio: $("#datainicio").val(),
            dataFinal: $("#datafinal").val()
            }
          
        })
        .then(function (response) {
          pedidosSeparados = response.data;
          let errosformatado = [];
         for( i = 0; i< separadores.length;i++){
            errosformatado[i] = [separadores[i],pedidosSeparados[i]]
          }
           var data = new google.visualization.DataTable();
          data.addColumn('string', 'Topping');
          data.addColumn('number', 'Pedidos' );
          data.addRows(errosformatado);
      
          // Set chart options
          var options = {
              'title': 'Pedidos separados ',
              'width': 1000,
              'height': 500
          };
      
          // Instantiate and draw our chart, passing in some options.
          var chart = new google.visualization.ColumnChart(document.getElementById('desenhaGrafico'));
          chart.draw(data, options);


        })
        .catch(function (error) {
          console.error(error);
        })
 
    }else if($("#sel1").val() == "Erros"  && $("#datainicio").val() !== ""  && $("#datafinal").val() !== ""){

        
        let pedidosSeparados = [];

        axios.get('http://localhost:3001/dados/pedidos/errosSeparados', {
           params:{
           dataInicio: $("#datainicio").val(),
           dataFinal: $("#datafinal").val()
           }
         
       })
       .then(function (response) {
         pedidosSeparados = response.data;
         let errosformatado = [];
        for( i = 0; i< separadores.length;i++){
           errosformatado[i] = [separadores[i],pedidosSeparados[i]]
         }
          var data = new google.visualization.DataTable();
         data.addColumn('string', 'Topping');
         data.addColumn('number', 'Erros' );
         data.addRows(errosformatado);
     
         // Set chart options
         var options = {
             'title': 'Erros separadores ',
             'width': 1000,
             'height': 500
         };
     
         // Instantiate and draw our chart, passing in some options.
         var chart = new google.visualization.ColumnChart(document.getElementById('desenhaGrafico'));
         chart.draw(data, options);


       })
       .catch(function (error) {
         console.error(error);
       })
  
    }else{
        $(".mensagem").append(`
                <div class="alert alert-danger alert-dismissible fade show">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Favor preencha as opções de busca dos graficos </strong>
                </div>
                
                `);
    }      
      
        
}

function graficoBar() {


       
    if($("#sel1").val() == "Pedidos"  && $("#datainicio").val() !== ""  && $("#datafinal").val() !== ""){

        let pedidosSeparados = [];

         axios.get('http://localhost:3001/dados/Pedidos/Separados', {
            params:{
            dataInicio: $("#datainicio").val(),
            dataFinal: $("#datafinal").val()
            }
          
        })
        .then(function (response) {
          pedidosSeparados = response.data;

            let errosformatado = [];
         for( i = 0; i< separadores.length;i++){
            errosformatado[i] = [separadores[i],pedidosSeparados[i]]
          }
           var data = new google.visualization.DataTable();
          data.addColumn('string', 'Topping');
          data.addColumn('number', 'Pedidos' );
          data.addRows(errosformatado);
      
          // Set chart options
          var options = {
              'title': 'Pedidos separados ',
              'width': 1000,
              'height': 500
          };
      
          // Instantiate and draw our chart, passing in some options.
          var chart = new google.visualization.BarChart(document.getElementById('desenhaGrafico'));
          chart.draw(data, options);


        })
        .catch(function (error) {
          console.error(error);
        })
 
    }else if($("#sel1").val() == "Erros"  && $("#datainicio").val() !== ""  && $("#datafinal").val() !== ""){

        
        let pedidosSeparados = [];

        axios.get('http://localhost:3001/dados/pedidos/errosSeparados', {
           params:{
           dataInicio: $("#datainicio").val(),
           dataFinal: $("#datafinal").val()
           }
         
       })
       .then(function (response) {
         pedidosSeparados = response.data;

           let errosformatado = [];
        for( i = 0; i< separadores.length;i++){
           errosformatado[i] = [separadores[i],pedidosSeparados[i]]
         }
          var data = new google.visualization.DataTable();
         data.addColumn('string', 'Topping');
         data.addColumn('number', 'Erros' );
         data.addRows(errosformatado);
     
         // Set chart options
         var options = {
             'title': 'Erros separadores ',
             'width': 1000,
             'height': 500
         };
     
         // Instantiate and draw our chart, passing in some options.
         var chart = new google.visualization.BarChart(document.getElementById('desenhaGrafico'));
         chart.draw(data, options);


       })
       .catch(function (error) {
         console.error(error);
       })
  
    }else{
        $(".mensagem").append(`
                <div class="alert alert-danger alert-dismissible fade show">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Favor preencha as opções de busca dos graficos </strong>
                </div>
                
                `);
    }   

}

function graficoRosquinha() {

    if($("#sel1").val() == "Pedidos"  && $("#datainicio").val() !== ""  && $("#datafinal").val() !== ""){

        let pedidosSeparados = [];

         axios.get('http://localhost:3001/dados/Pedidos/Separados', {
            params:{
            dataInicio: $("#datainicio").val(),
            dataFinal: $("#datafinal").val()
            }
          
        })
        .then(function (response) {
          pedidosSeparados = response.data;
          let errosformatado = [['Pedidos','Pedidos pela data']];
          for( i = 1; i<= separadores.length;i++){
            errosformatado[i] = [separadores[i-1],pedidosSeparados[i-1]]
          }
          var data = new google.visualization.arrayToDataTable(errosformatado);
         
          // Set chart options
          var options = {
              'title': 'Erros separadores ',
              pieHole: 0.4,
              'width': 1000,
              'height': 500
          };
      
          // Instantiate and draw our chart, passing in some options.
          var chart = new google.visualization.PieChart(document.getElementById('desenhaGrafico'));
          chart.draw(data, options);
 


        })
        .catch(function (error) {
          console.error(error);
        })
 
    }else if($("#sel1").val() == "Erros"  && $("#datainicio").val() !== ""  && $("#datafinal").val() !== ""){

        
        let pedidosSeparados = [];

        axios.get('http://localhost:3001/dados/pedidos/errosSeparados', {
           params:{
           dataInicio: $("#datainicio").val(),
           dataFinal: $("#datafinal").val()
           }
         
       })
       .then(function (response) {
         pedidosSeparados = response.data;
         let errosformatado = [['Pedidos','Pedidos pela data']];
         for( i = 1; i<= separadores.length;i++){
            errosformatado[i] = [separadores[i-1],pedidosSeparados[i-1]]
          }
          var data = new google.visualization.arrayToDataTable(errosformatado);
         
         // Set chart options
         var options = {
             'title': 'Erros separadores ',
             pieHole: 0.4,
             'width': 1000,
             'height': 500
         };
     
         // Instantiate and draw our chart, passing in some options.
         var chart = new google.visualization.PieChart(document.getElementById('desenhaGrafico'));
         chart.draw(data, options);


       })
       .catch(function (error) {
         console.error(error);
       })
  
    }else{
        $(".mensagem").append(`
                <div class="alert alert-danger alert-dismissible fade show">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Favor preencha as opções de busca dos graficos </strong>
                </div>
                
                `);
    }      



}


function graficopizza3d() {

    if($("#sel1").val() == "Pedidos"  && $("#datainicio").val() !== ""  && $("#datafinal").val() !== ""){

        let pedidosSeparados = [];

         axios.get('http://localhost:3001/dados/Pedidos/Separados', {
            params:{
            dataInicio: $("#datainicio").val(),
            dataFinal: $("#datafinal").val()
            }
          
        })
        .then(function (response) {
          pedidosSeparados = response.data;
          let errosformatado = [['Pedidos','Pedidos pela data']];
         for( i = 1; i<= separadores.length;i++){
            errosformatado[i] = [separadores[i-1],pedidosSeparados[i-1]]
          }
          var data = new google.visualization.arrayToDataTable(errosformatado);
         
          // Set chart options
          var options = {
              'title': 'Erros separadores ',
               is3D: true,
              'width': 1000,
              'height': 500
          };
      
          // Instantiate and draw our chart, passing in some options.
          var chart = new google.visualization.PieChart(document.getElementById('desenhaGrafico'));
          chart.draw(data, options);
 


        })
        .catch(function (error) {
          console.error(error);
        })
 
    }else if($("#sel1").val() == "Erros"  && $("#datainicio").val() !== ""  && $("#datafinal").val() !== ""){

        
        let pedidosSeparados = [];

        axios.get('http://localhost:3001/dados/pedidos/errosSeparados', {
           params:{
           dataInicio: $("#datainicio").val(),
           dataFinal: $("#datafinal").val()
           }
         
       })
       .then(function (response) {
         pedidosSeparados = response.data;
         let errosformatado = [['Pedidos','Pedidos pela data']];
         for( i = 1; i<= separadores.length;i++){
            errosformatado[i] = [separadores[i-1],pedidosSeparados[i-1]]
          }
          var data = new google.visualization.arrayToDataTable(errosformatado);
         
         // Set chart options
         var options = {
             'title': 'Erros separadores ',
              is3D: true,
             'width': 1000,
             'height': 500
         };
     
         // Instantiate and draw our chart, passing in some options.
         var chart = new google.visualization.PieChart(document.getElementById('desenhaGrafico'));
         chart.draw(data, options);


       })
       .catch(function (error) {
         console.error(error);
       })
  
    }else{
        $(".mensagem").append(`
                <div class="alert alert-danger alert-dismissible fade show">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Favor preencha as opções de busca dos graficos </strong>
                </div>
                
                `);
    }      
}