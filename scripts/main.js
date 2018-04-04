

// Make monochrome colors
var pieCircleColors = (function () {
    var colors = [],
        base = Highcharts.getOptions().colors,
        i;
    // console.log(Highcharts.getOptions().colors);
    // for (i = 0; i < 10; i += 1) {
    //     // Start out with a darkened base color (negative brighten), and end
    //     // up with a much brighter color
    //     colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    // }
    return colors;
}());

// Build the chart
Highcharts.chart('chart-circle', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        marginBottom : 30,
    },  
    title: {
        text: 'LAST 30 DAYS',
        align: 'center',
        verticalAlign: 'bottom',
        color:'#fff',
       
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieCircleColors,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}',
                color: '#000000',
                distance: -50,
                
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'Firefox', y: 10.85 },
            { name: 'Edge', y: 4.67 },
            { name: 'Safari', y: 4.18 },
            { name: 'Other', y: 7.05 }
        ]
    }]
});
// ============================chart - pareto
Highcharts.chart('chart-pareto', {
    chart: {
        renderTo: 'chart-pareto',
        type: 'column'
    },
    title: {
        text: 'LAST 30 DAYS',
        align: 'center',
        verticalAlign: 'bottom',
        color:'#fff',
    },
    xAxis: {
        title: {
            enabled: null
        },  
    },
    yAxis: [{
        title: {
            enabled: null
        },
    }, 
        {   
            minPadding: 0,
            maxPadding: 0,
            max: 100,
            min: 0,
            opposite: true,
            labels: {
                format: ""
        }
    }],
    series: [{
        type: 'pareto',
        name: 'Pareto',
        yAxis: 1,
        zIndex: 10,
        baseSeries: 1
    }, 
    {
        name: 'Complaints',
        type: 'column',
        zIndex: 2,
        color:'red',
        data: [755, 222, 151, 86, 72, 51, 36, 10]
    }]

});
///chart 3d pie - name
Highcharts.chart('chart-3d-pie', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Browser market shares at a specific website, 2014'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        format: '{point.percentage:.1f}%',
        data: [
            ['Firefox', 45.0],
            ['IE', 26.8],
            {
                name: 'Chrome',
                y: 12.8,
                sliced: true,
                selected: true
            },
            ['Safari', 8.5],
            ['Opera', 6.2],
            ['Others', 0.7]
        ]
    }]
});
///chart 3d pie - percent
Highcharts.chart('chart-3d-pie-percent', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Browser market shares at a specific website, 2014'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        backgroundColor: '#000',
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.percentage:.1f}%'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        format: '{point.percentage:.1f}%',
        data: [
            ['Firefox', 45.0],
            ['IE', 26.8],
            {
                name: 'Chrome',
                y: 12.8,
                sliced: true,
                selected: true
            },
            ['Safari', 8.5],
            ['Opera', 6.2],
            ['Others', 0.7]
        ],
         showInLegend: true,

         
    }],
    legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
        x: -50,
        y: 120,
       itemStyle: {
        fontWeight: 'normal',
        fontSize: '18px',
        padding: '20px',
      }
    }
});

//chart col 3d
Highcharts.chart('chart-3d-column', {
        chart: {
            type: 'column',
            margin: 75,
            options3d: {
				enabled: true,
                // alpha: 15,
                beta: 15,
                // depth: 50
            }
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: '',
            }
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        series: [{
            data: [
                ['Firefox', 45.0],
                ['IE', 26.8],
               
                ['Safari', 8.5],
                ['Opera', 6.2],
                ['Others', 0.7]
            ]
        }]
    });

//chart line

Highcharts.chart('chart-line', {
    chart:{
        title:{
            text:''
        }
    },
    xAxis: {
        title: {
            text: 'Number of Employees',
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: '',
        }
    },
    legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
        x: 0,
        y: 50,
       itemStyle: {
        fontWeight: 'normal',
        fontSize: '12px',
      }
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            // pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

//chart chopper 
Highcharts.chart('chart-chopper', {
    chart: {
        type: 'column',
        margin: 75,
        options3d: {
            enabled: true,
            alpha: 1,
            beta: 10,
            depth: 90
        }
    },
    xAxis: {
        title: {
            text: '',
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: '',
        },
    },
    plotOptions: {
        column: {
            depth: 40,
            stacking: true,
            grouping: false,
            groupZPadding: 10
        }
    },
    series: [{
        data: [1, 2, 4, 3, 2, 4],
        stack: 0
    }, {
        data: [5, 6, 3, 4, 1, 2],
        stack: 0
    }],
    legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
        x: 0,
        y: 50,
       itemStyle: {
        fontWeight: 'normal',
        fontSize: '12px',
      }
    },
})


// Data gathered from http://populationpyramid.net/germany/2015/

// Data gathered from http://populationpyramid.net/germany/2015/

// Age categories
var categories = [
    '0-4', '5-9', '10-14', '15-19',
    '20-24', '25-29', '30-34', '35-39', '40-44',
    '45-49', '50-54', '55-59', '60-64', '65-69',
    '70-74', '75-79', '80-84', '85-89', '90-94',
    '95-99', '100 + '
];

Highcharts.chart('chart-bar-negative-stack', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Population pyramid for Germany, 2015'
    },
    subtitle: {
        text: 'Source: <a href="http://populationpyramid.net/germany/2015/">Population Pyramids of the World from 1950 to 2100</a>'
    },
    xAxis: [{
        categories: categories,
        reversed: false,
    }],
    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value) + '%';
            }
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
        }
    },

    series: [{
        name: 'Male',
        data: [-2.2, -2.2, -2.3, -2.5, -2.7, -3.1, -3.2,
            -3.0, -3.2, -4.3, -4.4, -3.6, -3.1, -2.4,
            -2.5, -2.3, -1.2, -0.6, -0.2, -0.0, -0.0]
    }, {
        name: 'Female',
        data: [2.1, 2.0, 2.2, 2.4, 2.6, 3.0, 3.1, 2.9,
            3.1, 4.1, 4.3, 3.6, 3.4, 2.6, 2.9, 2.9,
            1.8, 1.2, 0.6, 0.1, 0.0]
    }]
});