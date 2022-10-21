/*
@autores Vanessa Ortiz
         Denis Sevilla
         Javier Ventura
@version 1.0
@fecha 08/08/2020
*/
function graficoDispercion(){
    var dom = document.getElementById("container");
    var myChart = echarts.init(dom);
    var app = {};
    var option;
    option = {
        xAxis: {},
        yAxis: {},
        series: [{
            symbolSize: 20,
            data: [
                [10.0, 8.04],
                [8.07, 6.95],
                [13.0, 7.58],
                [9.05, 8.81],
                [11.0, 8.33],
                [14.0, 7.66],
                [13.4, 6.81],
                [10.0, 6.33],
                [14.0, 8.96],
                [12.5, 6.82],
                [9.15, 7.20],
                [11.5, 7.20],
                [3.03, 4.23],
                [12.2, 7.83],
                [2.02, 4.47],
                [1.05, 3.33],
                [4.05, 4.96],
                [6.03, 7.24],
                [12.0, 6.26],
                [12.0, 8.84],
                [7.08, 5.82],
                [5.02, 5.68]
            ],
            type: 'scatter'
        }]
    };
    
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
}
graficoDispercion();




function graficoLineal(){
    var dom = document.getElementById("container2");
    var myChart = echarts.init(dom);
    var app = {};
    var option;
    option = {
        xAxis: {
            type: 'category',
            data: ['2010', '2012', '2014', '2016', '2018', '2020', '2022']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
        }]
    };
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
}
graficoLineal();


