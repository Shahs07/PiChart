angular.module("pieChartApp")
	   .directive("pieChart",["googleService",pieChart]);

function pieChart(googleService){
	   			return {
	   				restrict:"EA",
	   				scope:{
	   					chartData:'=',
	   					chartConfig:'=',
	   					chartOption:'='
	   				},
	   				link:link
		   		}

	function link($scope,$element){
	   					googleService.then(function() {
				          var chart = new google.visualization.PieChart($element[0]);
            
            			// watch for charaData  and whenever the data changes create the new chart acoording to newVal
            			//used true as third argument to deep watch the chartData	
				          $scope.$watch('chartData',watch,true);

				          function watch(newVal, oldVal) {
				            var config = $scope.chartConfig;
				            var options = $scope.chartOption;
				            if (newVal) {
				              chart.draw(
				                convertToPieChartDataTableFormat(
				                  config.firstColumnHeader,
				                  config.secondColumnHeader,
				                  newVal),
				               options);
				            }
				         }
		   				});
		}
		
	//function to convert data in the form that google chart api accpets
	function convertToPieChartDataTableFormat( firstColumnName, secondColumnName, data) {
				      var pieChartArray = [[firstColumnName, secondColumnName]];
				      for (var i = 0; i < data.length; i++) {
				        pieChartArray.push([data[i].label, data[i].value]);
					      }
				      return google.visualization.arrayToDataTable(pieChartArray); 
	    }	   	
		   		



	}


