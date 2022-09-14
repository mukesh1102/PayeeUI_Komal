//[Dashboard Javascript]



$(function () {

  'use strict';


 var plot = $.plot('#flotChart', [{
          data: flotSampleData3,
          color: '#38b8f2',
          lines: {
            fillColor: { colors: [{ opacity: 0 }, { opacity: 0.5 }]}
          }
        },{
          data: flotSampleData4,
          color: '#ec4b71',
          lines: {
            fillColor: { colors: [{ opacity: 0 }, { opacity: 0.5 }]}
          }
        }], {
    			series: {
    				shadowSize: 1,
            lines: {
              show: true,
              lineWidth: 2,
              fill: true
            }
    			},
          grid: {
            borderWidth: 0,
            labelMargin: 8
          },
    			yaxis: {
            			show: true,
    					min: 0,
    					max: 60,
            			ticks: [[0,''],[20,'20K'],[40,'40K'],[60,'60K'],[80,'80K']],
            			tickColor: 'rgba(255, 255, 255, 0.10)',
						font: {
							color: '#666666'
						  }
    			},
    			xaxis: {
            			show: true,
            			color: 'rgba(255, 255, 255, 0.10)',
            			ticks: [[25,'OCT 21'],[75,'OCT 22'],[100,'OCT 23'],[125,'OCT 24']],
						font: {
							color: '#666666'
						  }
          }
        });
	
		
	
		var options = {
            chart: {
                height: 420,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%'	
                },
            },
            dataLabels: {
                enabled: false
            },
			colors: ["#0fc48f", '#298eff'],
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            series: [{
                name: 'New User',
                data: [76, 85, 101, 98, 87, 105, 91]
            }, {
                name: 'Old User',
                data: [35, 41, 36, 26, 45, 48, 52]
            }],
            xaxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Set', 'Sun'],
            },
            fill: {
                opacity: 1

            },
			  legend: {
				position: 'top',
				horizontalAlign: 'left'
			  },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#userflow"),
            options
        );

        chart.render();
	
	var optionsBar = {
		  chart: {
			type: 'bar',
			height: 270,
			width: '100%',
			stacked: true,
			foreColor: '#999'
		  },
		  plotOptions: {
			bar: {
			  dataLabels: {
				enabled: false
			  },
			  columnWidth: '75%',
			  endingShape: 'rounded'
			}
		  },
		legend: {
			position: 'top',
			horizontalAlign: 'left', 
		},
		  colors: ["#46be8a", '#cccccc'],
		  series: [{
			name: "Sale",
			data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19, 15, 10, 11, 15, 19, 23],
		  }, {
			name: "Views",
			data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19, 15, 10, 11, 15, 19, 23],
		  }],
		  labels: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4],
		  xaxis: {
			axisBorder: {
			  show: false
			},
			axisTicks: {
			  show: false
			},
			crosshairs: {
			  show: false
			},
			labels: {
			  show: false,
			  style: {
				fontSize: '14px'
			  }
			},
		  },
		  grid: {
			xaxis: {
			  lines: {
				show: false
			  },
			},
			yaxis: {
			  lines: {
				show: false
			  },
			}
		  },
		  yaxis: {
			axisBorder: {
			  show: false
			},
			labels: {
			  show: false
			},
		  },
		  tooltip: {
			shared: true
		  },
			dataLabels: {
                enabled: false
            },

		}

		var chartBar = new ApexCharts(document.querySelector('#revbar'), optionsBar);
		chartBar.render();
	


}); // End of use strict
