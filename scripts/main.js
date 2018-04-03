

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
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
        ]
    }]
});