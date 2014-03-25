$(document).ready(function(){

  var data = [
    ['Yes', 10],['No', 3]
  ];
	var seriesColors = ["green","red"];



  var plot1 = jQuery.jqplot ('pichart', [data],
    {
      seriesColors:seriesColors,	
      seriesDefaults: {
        // Make this a pie chart.
        renderer: jQuery.jqplot.PieRenderer,
        rendererOptions: {
          // Put data labels on the pie slices.
          // By default, labels show the percentage of the slice.
          showDataLabels: true
        }
      },
      legend: { show:false, location: 'e' },  
      grid: {
        drawGridLines: false,
        borderColor: '#FFF',
        background: '#FFF',      // CSS color spec for background color of grid.
        shadow: false,
    }    
    }
  );

  var plot2 = jQuery.jqplot ('barchart',[data], {
        // Provide a custom seriesColors array to override the default colors.
        seriesColors:seriesColors,
        seriesDefaults:{
            renderer:$.jqplot.BarRenderer,
            rendererOptions: {
                // Set varyBarColor to tru to use the custom colors on the bars.
                varyBarColor: true
            }
        },
        axes:{
            xaxis:{
                renderer: $.jqplot.CategoryAxisRenderer
            }          
        }
  });

  var plot3 = jQuery.jqplot ('linechart', [[0],[0]]);


 window.setInterval(function(){
  	$.ajax({
		url: "http://10.100.5.20:9763/ivote/count",
		dataType: "json",
		// the name of the callback parameter, as specified by the YQL service
		// tell jQuery we're expecting JSONP
		// work with the response
		success: function( response ) {
			var data = [["Yes",response.yes],["No",response.no]];
			plot1.series[0].data = data;
			plot1.replot();
			plot2.series[0].data = [[3,7]];
			plot2.replot(false);
			plot3.series[0].data = [[2,3,4]];
			plot3.series[1].data = [[3,5,6]];
			plot3.replot(false);
		}
	}); 	
 }, 3000);


});