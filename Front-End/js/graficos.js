// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

var separadores = ["JONATAS", "MICHEL", "GUILHERME", "RODRIGO", "EDMILSON", "DANIEL", "JHONNY", "JOSEPH", "THIAGO", "PAULO", "PAULO V.", "CARLOS", "MATHEUS A", "FERNANDO", "JOERBE", "PATRICK", "IVAN", "MARILIA"]

// Set a callback to run when the Google Visualization API is loaded.
/* google.charts.setOnLoadCallback(drawChart); */

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function limpardiv() {
    $("#desenhaGrafico").empty();
}

// carrego dados de todos os pedidos e erros que foram realizados por todos os separadores



async function graficoColunas() {

         console.log("Data incio   "+$("#datainicio").val()) 
         console.log("Data Final   "+$("#datafinal").val()) 
         console.log(separadores)
         axios.get('http://localhost:3001/dados/Pedidos/Separados', {
            nome: elemento, 
            dataInicio: $("#datainicio").val(),
            dataFinal: $("#datafinal").val()
            
          
        })
        .then(function (response) {
          console.log(response.data[0]);
  
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });  
          
      

   


    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices' );
    data.addRows([
        ['Mushrooms', 3],
        ['Onions', 1],
        ['Olives', 1],
        ['Zucchini', 1],
        ['Pepperoni', 2]
    ]);

    // Set chart options
    var options = {
        'title': 'How Much Pizza I Ate Last Night',
        'width': 1000,
        'height': 500
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('desenhaGrafico'));
    chart.draw(data, options);
}

function graficoBar() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Mushrooms', 3],
        ['Onions', 1],
        ['Olives', 1],
        ['Zucchini', 1],
        ['Pepperoni', 2]
    ]);

    // Set chart options
    var options = {
        'title': 'How Much Pizza I Ate Last Night',
        'width': 1000,
        'height': 500
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('desenhaGrafico'));
    chart.draw(data, options);
}

function graficoCombo() {

    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
        ['2004/05', 165, 938, 522, 998, 450, 614.6],
        ['2005/06', 135, 1120, 599, 1268, 288, 682],
        ['2006/07', 157, 1167, 587, 807, 397, 623],
        ['2007/08', 139, 1110, 615, 968, 215, 609.4],
        ['2008/09', 136, 691, 629, 1026, 366, 569.6]
    ]);

    var options = {
        title: 'Monthly Coffee Production by Country',
        vAxis: { title: 'Cups' },
        hAxis: { title: 'Month' },
        seriesType: 'bars',
        series: {
            5: { type: 'line' }
        },
        'width': 1000,
        'height': 500
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ComboChart(document.getElementById('desenhaGrafico'));
    chart.draw(data, options);
}

function graficopizza3d() {

    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        title: 'My Daily Activities',
        is3D: true,
        'width': 1000,
        'height': 500,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('desenhaGrafico'));
    chart.draw(data, options);
}