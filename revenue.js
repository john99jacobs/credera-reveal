var chart = new Highcharts.Chart({
            chart: {
                type: 'column',
                renderTo: 'container'
            },
            colors: [
              '#4F81BD',
              '#C0504D',
              '#9BBB59'
            ],
            title: {
                text: ''
            },
            xAxis: {
                categories: [
                    'Oct',
                    'Nov',
                    'Dec',
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                                    dataLabels: {
                    enabled: false
                }

                }
            },
            series: [{
                name: 'Planned Revenue',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    
            }, {
                name: 'Forecasted Revenue',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    
            }, {
                name: 'Actual Revenue',
                data: [2, 4, 6]
        
            }]
        });
    

